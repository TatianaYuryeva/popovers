import { Popover } from "./popover";
import { Widget } from "./widget"

const container = document.querySelector(".container");
const widget = new Widget(container)
widget.bindToDOM()

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

const popoverFactory = new Popover();

function showPopover(e) {
  const button = e.target
  button.classList.toggle('popover-show')

  if (button.classList.contains('popover-show')){
    popoverFactory.showPopover(`${button.dataset.popoverMessage - 1}`, e.target)
  } else {
    popoverFactory.removePopover()
  }
}

button1.addEventListener('click', showPopover);

button2.addEventListener('click', showPopover);
