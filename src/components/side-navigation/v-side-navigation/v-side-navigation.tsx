import { Component, Host, State, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'v-side-navigation',
  styleUrl: 'v-side-navigation.scss',
  shadow: true,
})
export class VSideNavigation {
  @State() isDrawerOpen: boolean = false;

  toggleIsDrawerOpen = () => {
    this.isDrawerOpen = !this.isDrawerOpen;
  };

  render() {
    return (
      <Host>
        <div
          class={classNames(
            'p-side-navigation',
            'is-sticky',
            {
              'is-drawer-hidden': !this.isDrawerOpen,
            },
            `is-drawer-${this.isDrawerOpen ? 'expanded' : 'collapsed'}`,
          )}
          aria-label="Side"
        >
          <div class="u-hide--large p-strip--light is-shallow">
            <div class="u-fixed-width">
              <v-button prefixIcon="menu" onClick={this.toggleIsDrawerOpen}>
                Contents
              </v-button>
            </div>
          </div>
          <div class="p-side-navigation__overlay" onClick={this.toggleIsDrawerOpen} aria-controls="drawer"></div>
          <nav class="p-side-navigation__drawer">
            <aside class="p-strip is-shallow">
              <div class="p-side-navigation__drawer-header">
                <a href="#" class="p-side-navigation__toggle--in-drawer" onClick={this.toggleIsDrawerOpen} aria-controls="drawer">
                  Close side navigation
                </a>
              </div>
              <slot />
            </aside>
          </nav>
        </div>
      </Host>
    );
  }
}
