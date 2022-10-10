class Create {
  constructor(parent, tag, classNames, value, attributes) {
    this.element = document.createElement(tag)
    this.element.classList.add(...classNames.split(' '))
    this.element.innerHTML = value
    parent.appendChild(this.element)
    if (attributes) {
      for (const key in attributes) {
        this.element.setAttribute(key, attributes[key])
      }
    }
  }
}

export default Create
