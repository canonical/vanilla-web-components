import { Component, Element, Host, Prop, h } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';
import classNames from 'classnames';

@Component({
  tag: 'v-side-navigation-item',
  styleUrl: 'v-side-navigation-item.scss',
  shadow: false,
})
export class VSideNavigationItem {
  @Prop() link: string;
  @Prop() itemTitle: string;

  hasSubList: boolean = false;
  isHighlighted: boolean = false;

  @Element() hostElement: HTMLStencilElement;

  componentWillLoad() {
    // if location matches link then highlight the link
    this.isHighlighted = window.location.pathname.split(this.link).length - 1 === 1;
    this.hasSubList = !!this.hostElement.querySelector('v-side-navigation-item');
  }

  render() {
    return (
      <Host>
        <li class="p-side-navigation__item">
          <a class="p-side-navigation__link" href={this.link} aria-current={this.isHighlighted ? 'page' : ''}>
            {this.itemTitle}
          </a>
          {this.hasSubList && (
            <ul class={classNames('p-side-navigation__list', { 'u-hide': !this.isHighlighted || !this.hasSubList })}>
              <slot />
            </ul>
          )}
        </li>
      </Host>
    );
  }
}
