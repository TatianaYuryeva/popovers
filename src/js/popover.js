export class Popover {
  #popoverMessages;
  constructor() {
    this.popoverElement = document.createElement("div");
    this.popoverTitle = document.createElement("div");
    this.popoverText = document.createElement("div");
    this.#popoverMessages = [
      {
        title: "Заголовок",
        text: "С учётом сложившейся международной обстановки, существующая теория напрямую зависит от модели развития.",
      },
      {
        title: "Заголовок",
        text: "И нет сомнений, что реплицированные с зарубежных источников, современные исследования, вне зависимости от их уровня, должны быть разоблачены.",
      },
    ];
  }

  showPopover(message, element) {
    this.popoverElement.append(this.popoverTitle);
    this.popoverElement.append(this.popoverText);
    this.popoverElement.classList.add("popover");
    this.popoverTitle.classList.add("popover-title");
    this.popoverText.classList.add("popover-text");
    this.popoverTitle.textContent = this.#popoverMessages[message].title;
    this.popoverText.textContent = this.#popoverMessages[message].text;

    document.body.appendChild(this.popoverElement);

    const { left, top } = element.getBoundingClientRect();
    this.popoverElement.style.left =
      left +
      element.offsetWidth / 2 -
      this.popoverElement.offsetWidth / 2 +
      "px";
    this.popoverElement.style.top =
      top - this.popoverElement.offsetHeight - 10 + "px";
  }

  removePopover() {
    this.popoverElement.remove();
  }
}
