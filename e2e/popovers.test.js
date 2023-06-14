/**
 * @jest-environment jsdom
 */

import { Widget } from "../src/js/widget"

test('Widget should render on page start', () => {
      const container = document.querySelectorAll('.container')
      const widget = new Widget(container)

      widget.bindToDOM()

      expect(container.innerHTML).toEqual(Widget.markup)
    });

    test('Widget buttons should show popover on click and close popover on next click', () => {
      const container = document.querySelectorAll('.container')
      const widget = new Widget(container)

      widget.bindToDOM()

      const buttons = document.querySelectorAll('.btn');
      
        for (let button of buttons) {
          button.click();
          let popovers = document.querySelectorAll('.popover');
          expect(popovers.length).toBe(1)
      
          button.click();
          popovers = document.querySelectorAll('.popover');
          expect(popovers.length).toBe(0)      
          }
        });
