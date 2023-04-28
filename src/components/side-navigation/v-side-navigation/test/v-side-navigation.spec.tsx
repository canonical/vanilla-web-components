import { newSpecPage } from '@stencil/core/testing';
import { VSideNavigation } from '../v-side-navigation';

describe('v-side-navigation', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VSideNavigation],
      html: `<v-side-navigation></v-side-navigation>`,
    });
    expect(page.root).toEqualHtml(`
      <v-side-navigation>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-side-navigation>
    `);
  });
});
