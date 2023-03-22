import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'v-button',
  styleUrl: 'v-button.scss',
  shadow: true,
})
export class VButton {
  private ButtonAppearance = {
    BASE: 'base',
    BRAND: 'brand',
    DEFAULT: '',
    LINK: 'link',
    NEGATIVE: 'negative',
    POSITIVE: 'positive',
  } as const;

  /**
   * The appearance of the button.
   */
  @Prop() appearance?: typeof this.ButtonAppearance[keyof typeof this.ButtonAppearance];
  /**
   * Optional class(es) to pass to the button element.
   */
  @Prop() extraClassNames?: string;
  /**
   * Whether the button should have dense padding.
   */
  @Prop() dense?: boolean;
  /**
   * Whether the button should be disabled.
   */
  @Prop() disabled?: boolean;
  /**
   * Whether the button has an icon in the content.
   */
  @Prop() hasIcon?: boolean;
  /**
   * Whether the button should display inline.
   */
  @Prop() inline?: boolean;
  /**
   * Function for handling button click event.
   */
  @Prop() small?: boolean;
  /**
   * Function for handling button click event.
   */
  @Prop() href?: string;

  private classes = classNames(
    this.appearance ? `p-button--${this.appearance}` : 'p-button',
    {
      'has-icon': this.hasIcon,
      'is-dense': this.dense,
      'is-inline': this.inline,
      'is-small': this.small,
      'is-disabled': this.disabled,
    },
    this.extraClassNames,
  );

  render() {
    return (
      <Host style={{ pointerEvents: this.disabled ? 'none' : undefined }}>
        {this.href ? (
          <a href={this.href} class={this.classes}>
            <slot />
          </a>
        ) : (
          <button disabled={this.disabled} class={this.classes}>
            <slot />
          </button>
        )}
      </Host>
    );
  }
}
