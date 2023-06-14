export class Widget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <div class="widget">
      <button type="button" class="btn btn1" data-popover-message="1">Click to toggle popover 1</button>
      <button type="button" class="btn btn2" data-popover-message="2">Click to toggle popover 2</button>
    </div>
      `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = Widget.markup;
  }
}
