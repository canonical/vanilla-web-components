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
   * Whether the should display a loading spinner.
   */
  @Prop() isProcessing?: boolean;
  /**
   * Whether the button should display inline.
   */
  @Prop() inline?: boolean;
  /**
   * Wether the button should be small.
   */
  @Prop() small?: boolean;
  /**
   * If this is set, the button will be rendered as a <a> tag with the link provided.
   */
  @Prop() href?: string;

  private classes = classNames(
    this.appearance ? `p-button--${this.appearance}` : 'p-button',
    {
      'is-dense': this.dense,
      'is-inline': this.inline,
      'is-small': this.small,
      'is-disabled': this.disabled,
      'is-processing': this.isProcessing,
    },
    this.extraClassNames,
  );

  render() {
    return (
      <Host style={{ pointerEvents: this.disabled || this.isProcessing ? 'none' : undefined }}>
        {this.href ? (
          <a href={this.href} class={this.classes}>
            {this.isProcessing && <i class="p-icon--spinner u-animation--spin is-light"></i>}
            <slot />
          </a>
        ) : (
          <button disabled={this.disabled} class={this.classes}>
            {this.isProcessing && <i class="p-icon--spinner u-animation--spin is-light"></i>}
            <slot />
          </button>
        )}
      </Host>
    );
  }
}
