import { Component, Prop, Host, h } from '@stencil/core';
import { Icon } from './type';
import classNames from 'classnames';

@Component({
  tag: 'v-icon',
  styleUrl: 'v-icon.scss',
  shadow: true,
})
export class VIcon {
  /**
   * The name of the icon to display.
   */
  @Prop() icon: Icon;

  /**
   * The name of the icon to display.
   */
  @Prop() isRotating?: boolean;

  /**
   * The name of the icon to display.
   */
  @Prop() isLight?: boolean;

  render() {
    return (
      <Host>
        <style>@include vf-p-icon-pin</style>
        <i
          class={classNames(`p-icon--${this.icon}`, {
            'u-animation--spin': this.isRotating,
            'is-light': this.isLight,
          })}
        ></i>
      </Host>
    );
  }
}
