import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'v-side-navigation-section',
  styleUrl: 'v-side-navigation-section.scss',
  shadow: false,
})
export class VSideNavigationSection {
  @Prop() sectionTitle: string;

  render() {
    return (
      <Host>
        <ul class="p-side-navigation__list">
          <li class="p-side-navigation__item--title">
            <span class="p-side-navigation__text">{this.sectionTitle}</span>
          </li>
          <slot />
        </ul>
      </Host>
    );
  }
}
