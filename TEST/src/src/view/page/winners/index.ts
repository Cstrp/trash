import { getWinners } from '@/data/interfaces/IWinner';
import { WinContainer } from '@/view/components/winnersContainer';
import { Template } from '@/view/template/template';

class Winners extends Template {
  container = new WinContainer(this.element);

  page: number = 1;

  constructor(parent: HTMLElement) {
    super(parent, 'section', 'winners');
  }

  async allWinners(page: number = 0, sort: string = 'id', order: string = 'ASC'): Promise<void> {
    const winners = await getWinners(page, sort, order);

    const count = +winners.count;

    this.container.pagination.updNextBtn(this.page, count, 10);
    this.container.addWinners(winners);
  }
}

export default Winners;
