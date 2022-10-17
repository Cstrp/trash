import axios from 'axios';

interface IGetCar {
  name: string;
  color: string;
  id?: number;
  rmCar?: (id: number) => void;
  updCar?: (id: number) => void;
}

interface IGetCars {
  name: string;
  color: string;
  id?: number;
}

interface ICreateCar {
  name: string;
  color: string;
}

interface IUpdateCar {
  name: string;
  color: string;
  id?: number;
}

interface IDeleteCar {
  id: number;
}

const url = 'http://localhost:3000';

const getCar = async (id: number): Promise<IGetCar> => {
  const data = await axios.get(`${url}/garage`);

  switch (data.status) {
    case 200:
      return data.data;
    case 404:
      throw new Error(`Car with id ${id} not found`);
    default:
      throw new Error(`${data.status} ${data.statusText}`);
  }
};

const getCars = async (
  page: number = 1,
  limit: number = 10,
): Promise<{
  cars: Array<IGetCars>;
  count: string;
} | null> => {
  const data = await axios.get(`${url}/garage?page=${page}&limit=${limit}`);
  const res: IGetCars[] = await data.data;

  switch (data.status) {
    case 200:
      return {
        cars: res,
        count: data.headers['x-total-count'] || '0',
      };
    case 404:
      throw new Error('Cars not found');
    default:
      return {
        cars: res,
        count: data.headers['x-total-count'] || '0',
      };
  }
};

const createCar = async (car: ICreateCar): Promise<void> => {
  await axios
    .post(`${url}/garage`, { name: car.name, color: car.color }, { headers: { 'Content-Type': 'application/json' } })
    .catch((err) => {
      throw new Error(err);
    });
};

const updateCar = async (car: IUpdateCar): Promise<void> => {
  await axios
    .put(
      `${url}/garage/${car.id}`,
      { name: car.name, color: car.color },
      { headers: { 'Content-Type': 'application/json' } },
    )
    .catch((err) => {
      throw new Error(err);
    });
};

const deleteCar = async (id: IDeleteCar): Promise<void> => {
  await axios.delete(`${url}/garage/${id.id}`).catch((err) => {
    throw new Error(err);
  });
};

export { IGetCar, IGetCars, IUpdateCar, ICreateCar, IDeleteCar, getCar, getCars, createCar, updateCar, deleteCar };
