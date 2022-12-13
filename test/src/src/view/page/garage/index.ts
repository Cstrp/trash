import { Item } from '@/view/components/garageContainer/item';
import { Modal } from '@/view/components/modal';
import { Template } from '@/view/template/template';
import { GarageContainer } from '@/view/components/garageContainer';
import { Options } from '@/view/components/options';
import {
  getCar,
  getCars,
  createCar,
  deleteCar,
  updateCar,
  IGetCar,
  ICreateCar,
  IUpdateCar,
  IDeleteCar,
} from '@/data/interfaces/ICar';
import { IDataCar } from '@/data/interfaces/IData';
import { getWinner, createWinner, updateWinner } from '@/data/interfaces/IWinner';
import { generateRandomCar } from '@/data/Utils/helper';

class Garage extends Template {
  private modal!: Modal;

  private options!: Options;

  private container!: GarageContainer;

  page = 1;

  constructor(element: HTMLElement = document.body) {
    super(element, 'section', 'garage');
    this.getCars(this.page);

    this.options = new Options(this.element);
    this.options.createCar = async (prop) => {
      await this.createCar(prop);
      await this.getCars(this.page);
    };

    this.options.updateCar = (prop) => this.updateCar(prop);

    this.options.allStart = () => this.startAllCars();

    this.options.resetAllCars = () => this.allReset();

    this.options.generateCars = () => this.randomCars();

    this.container = new GarageContainer(this.element);

    this.container.rmCar = (id: IDeleteCar | number) => this.removeCar(id as IDeleteCar);

    this.container.updCar = (id: number) => this.getCar(id);

    this.container.updatePage = (page) => {
      this.page = page;
      this.getCars(page);
    };
  }

  private async getCar(id: number): Promise<void> {
    const car = await getCar(id);

    if (car) this.options.updProp(car);
  }

  private async getCars(page: number): Promise<void> {
    const data = await getCars(page);

    if (data) {
      const arr: Array<IGetCar> = <Array<IGetCar>>data.cars;
      const arrLength: string = data.count;

      this.container.addCar(arr, arrLength);

      this.container.pagination.updNextBtn(this.page, +arrLength, 7);
    }
  }

  private async updateCar(item: IUpdateCar): Promise<void> {
    await updateCar(item);
    await this.getCars(this.page);
  }

  private async createCar(item: ICreateCar): Promise<void> {
    await createCar(item);
  }

  private async removeCar(id: IDeleteCar): Promise<void> {
    await deleteCar(id);
  }

  private async randomCars(): Promise<void> {
    this.options.optBtn.btnRace.setDisable(true);
    this.options.optBtn.btnGenerate.setDisable(true);

    await this.createCar(generateRandomCar() as unknown as ICreateCar);

    await this.getCars(this.page);

    this.options.optBtn.btnRace.setDisable(false);
    this.options.optBtn.btnGenerate.setDisable(false);
  }

  private async startAllCars(): Promise<void> {
    this.options.optBtn.btnRace.setDisable(true);
    this.options.optBtn.btnGenerate.setDisable(true);

    const res: Promise<Item>[] = this.container.cars.map(async (item) => {
      await item.startEng(item.car.id as number);
      item.allDisable();

      return item;
    });

    const winCar = await Promise.race(res);

    const data: IDataCar = {
      id: winCar.car.id as number,
      name: winCar.car.name,
      color: winCar.car.color,
      speed: +(winCar.speed / 1000).toFixed(2),
      wins: 1,
    };

    this.modal = new Modal(this.element, data);
    this.options.optBtn.btnReset.rmDisable();
    setTimeout(() => this.modal?.removeElement(), 3000);

    await this.createUpdateWinner(data);
  }

  private async createUpdateWinner(data: IDataCar): Promise<void> {
    const res = await getWinner(data.id);

    if (res.status === 200) {
      res.result.wins++;
      data.wins = res.result.wins;

      await this.updateWinner(data);
    } else {
      await this.createWinner(data);
    }
  }

  private async createWinner(data: IDataCar): Promise<void> {
    const obj = {
      id: data.id,
      wins: 1,
      time: data.speed,
    };

    await createWinner(obj);
  }

  private async updateWinner(data: IDataCar): Promise<void> {
    const obj = {
      id: data.id,
      wins: data.wins,
      time: data.speed,
    };

    await updateWinner(obj);
  }

  private allReset(): void {
    this.options.optBtn.btnReset.setDisable(true);

    const totalReset = this.container.cars?.map(async (item) => {
      await item.stopEng(item.car.id as number);
    });

    Promise.all(totalReset).then(() => {
      this.options.optBtn.btnRace.setDisable(false);
      this.options.optBtn.btnGenerate.setDisable(false);
    });
  }
}

export default Garage;
