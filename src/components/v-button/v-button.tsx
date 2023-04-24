import { Component, h, Host, Prop } from '@stencil/core';
import classNames from 'classnames';
import { Icon } from '../v-icon/type';

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
    NEGATIVE: 'negative',
    POSITIVE: 'positive',
  } as const;

  private iconLightnessMap = {
    [this.ButtonAppearance.BASE]: false,
    [this.ButtonAppearance.BRAND]: true,
    [this.ButtonAppearance.DEFAULT]: false,
    [this.ButtonAppearance.POSITIVE]: true,
    [this.ButtonAppearance.NEGATIVE]: true,
  };

  private isIconLight = false;

  /**
   * The appearance of the button.
   */
  @Prop() appearance?: (typeof this.ButtonAppearance)[keyof typeof this.ButtonAppearance];
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
  /**
   * If this is set, the button will be rendered as a <a> tag with the link provided.
   */
  @Prop() prefixIcon?: Icon;
  /**
   * If this is set, the button will be rendered as a <a> tag with the link provided.
   */
  @Prop() suffixIcon?: Icon;

  componentWillRender() {
    this.isIconLight = this.iconLightnessMap[this.appearance ?? this.ButtonAppearance.DEFAULT];
  }

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
            <v-icon icon={this.prefixIcon} is-light={this.isIconLight}></v-icon>
            {this.isProcessing && <v-icon icon="spinner" is-rotating is-light={this.isIconLight}></v-icon>}
            <slot />
            <v-icon icon={this.suffixIcon} is-light={this.isIconLight}></v-icon>
          </a>
        ) : (
          <button disabled={this.disabled} class={this.classes}>
            <v-icon icon={this.prefixIcon} is-light={this.isIconLight}></v-icon>
            {this.isProcessing && <v-icon icon="spinner" is-rotating is-light={this.isIconLight}></v-icon>}
            <slot />
            <v-icon icon={this.suffixIcon} is-light={this.isIconLight}></v-icon>
          </button>
        )}
      </Host>
    );
  }
}
