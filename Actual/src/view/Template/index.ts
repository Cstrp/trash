class Template {
  public element: HTMLElement;

  public constructor(
    parent: HTMLElement | null,
    tagName: keyof HTMLElementTagNameMap = 'div' as keyof HTMLElementTagNameMap,
    className: string | Array<string> | null,
    value?: string | null,
    attr?: object | null,
  ) {
    this.element = document.createElement(tagName);

    if (typeof className === 'string') this.element.classList.add(...className.split(' '));

    if (parent) parent.append(this.element);

    if (value) this.element.innerHTML = <string>value;

    if (attr) {
      for (const [key, value] of Object.entries(attr)) {
        this.element.setAttribute(key, value as string);
      }
    }
  }

  removeElement(): void {
    this.element.remove();
  }

  render(): HTMLElement {
    return this.element;
  }
}

export {Template};
