import { newSpecPage } from '@stencil/core/testing';
import { VSideNavigationItem } from '../v-side-navigation-item';

describe('v-side-navigation-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSideNavigationItem],
      html: `<v-side-navigation-item></v-side-navigation-item>`,
    });
    expect(page.root).toEqualHtml(`
      <v-side-navigation-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-side-navigation-item>
    `);
  });
});
