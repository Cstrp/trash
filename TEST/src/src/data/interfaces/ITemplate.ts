type parentElement = HTMLElement | Document | null;
type values = string | null;

interface ITemplate {
  element: HTMLElement;
  tagName: string;
  className: string | null;
  parent?: parentElement;
  value?: values;
  attributes?: Record<string, unknown>;
  removeElement: () => void;
  disabled: (state: boolean) => void;
}

export { ITemplate, values, parentElement };
