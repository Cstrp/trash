import { Template } from '@/view/template/template';

type Page = Template | null;

const enum AppPage {
  garage = '/garage',
  winners = '/winners',
}

export { AppPage, Page };
