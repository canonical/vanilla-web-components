import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-accordion',
  styleUrl: 'v-accordion.scss',
  shadow: false,
})
export class VAccordion {
  id = `accordion-${Math.random().toString(36).substr(2, 9)}`;

  render() {
    return (
      <Host>
        <aside class="p-accordion" id={this.id}>
          <ul class="p-accordion__list">
            <slot />
          </ul>
        </aside>
      </Host>
    );
  }
}
