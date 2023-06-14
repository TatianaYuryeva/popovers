export class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    //this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
    <div class="widget">
      <button type="button" class="btn btn1" data-popover-message="1">Click to toggle popover 1</button>
      <button type="button" class="btn btn2" data-popover-message="2">Click to toggle popover 2</button>
    </div>
      `;
  }

  // static get submitSelector() {
  //   return ".submit";
  // }

  // static get inputSelector() {
  //   return ".input";
  // }

  // static get selector() {
  //   return ".card-form";
  // }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;
    // this.element = this.parentEl.querySelector(CardNumberFormWidget.selector);
    // this.submit = this.element.querySelector(
    //   CardNumberFormWidget.submitSelector
    // );
    // this.input = this.element.querySelector(CardNumberFormWidget.inputSelector);
    // this.cards = this.parentEl.querySelectorAll(".card");

    // this.element.addEventListener("submit", this.onSubmit);
  }

  // onSubmit(e) {
  //   e.preventDefault();

  //   for (const card of this.cards) {
  //     card.classList.add("disabled");
  //   }

  //   const value = this.input.value;
  //   const paySystem = validator.checkPaySystem(value);
  //   const paySystemIcon = document.querySelector(`.${paySystem}`);

  //   if (validator.isValidCheckDigit(value)) {
  //     paySystemIcon.classList.remove("disabled");
  //     this.input.classList.add("valid");
  //     this.input.classList.remove("invalid");
  //   } else {
  //     this.input.classList.add("invalid");
  //     this.input.classList.remove("valid");
  //   }
  // }
}
