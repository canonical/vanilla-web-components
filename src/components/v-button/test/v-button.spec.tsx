import { newSpecPage } from '@stencil/core/testing';
import { VButton } from '../v-button';

describe('v-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button>Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button>
        <mock:shadow-root>
          <button class="p-button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders disabled', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button disabled>Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button disabled style="pointer-events: none;">
        <mock:shadow-root>
          <button class="p-button is-disabled" disabled="">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders with a base appearance', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button appearance="base">Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button appearance="base">
        <mock:shadow-root>
          <button class="p-button--base">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders with a positive appearance', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button appearance="positive">Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button appearance="positive">
        <mock:shadow-root>
          <button class="p-button--positive">
            <slot></slot>
          </button> 
        </mock:shadow-root> 
        Button
      </v-button>
    `);
  });

  it('renders with a negative appearance', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button appearance="negative">Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button appearance="negative">
        <mock:shadow-root>
          <button class="p-button--negative">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders with a brand appearance', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button appearance="brand">Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button appearance="brand">
        <mock:shadow-root>
          <button class="p-button--brand">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders as a link if href is provided', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button href="https://example.com">Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button href="https://example.com">
        <mock:shadow-root>
          <a class="p-button" href="https://example.com">
            <slot></slot>
          </a>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders inline', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button inline>Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button inline>
        <mock:shadow-root>
          <button class="p-button is-inline">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders small', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button small>Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button small>
        <mock:shadow-root>
          <button class="p-button is-small">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });

  it('renders with an icon', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button><i class="p-icon--plus"></i><span>Icon button</span></v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button>
        <mock:shadow-root>
          <button class="p-button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        <i class="p-icon--plus"></i>
        <span>
          Icon button
        </span>
      </v-button>
    `);
  });

  it('renders with a loading spinner', async () => {
    const page = await newSpecPage({
      components: [VButton],
      html: `<v-button is-processing>Button</v-button>`,
    });
    expect(page.root).toEqualHtml(`
      <v-button is-processing style="pointer-events: none;">
        <mock:shadow-root>
         <button class="is-processing p-button">
           <i class="is-light p-icon--spinner u-animation--spin"></i>
            <slot></slot>
          </button>
        </mock:shadow-root>
        Button
      </v-button>
    `);
  });
});
