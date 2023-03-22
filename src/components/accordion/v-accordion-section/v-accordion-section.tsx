import { Component, Host, h, Prop, State, Event, EventEmitter, Listen, Element } from '@stencil/core';
import classNames from 'classnames';
import { AccordionEvent } from './types';

@Component({
  tag: 'v-accordion-section',
  styleUrl: 'v-accordion-section.scss',
  shadow: true,
})
export class VAccordionSection {
  @Prop() sectionTitle: string;

  @Prop() headingLevel?: number = 4;

  @State() isOpen: boolean = false;

  @Element() el: HTMLElement;

  private parentId: string;

  private sectionId: string;

  @Listen('toggle', { target: 'body' })
  handleToggle(event: CustomEvent) {
    if (event.detail.parent === this.parentId) {
      if (event.detail.section === this.sectionId) {
        this.isOpen = !this.isOpen;
      } else {
        this.isOpen = false;
      }
    }
  }

  @Event() toggle: EventEmitter<AccordionEvent>;

  handleClick() {
    this.toggle.emit({ section: this.sectionId, parent: this.parentId });
  }

  private id = `section-${Math.random().toString(36).substr(2, 9)}`;

  componentDidLoad() {
    this.parentId = this.el.parentElement.parentElement.id;
    this.sectionId = `${this.id} - ${this.parentId}`;
  }

  buttonClasses = classNames('p-accordion__heading', `p-heading--${this.headingLevel}`);

  render() {
    return (
      <Host>
        <li class="p-accordion__group">
          <div role="heading" aria-level={this.headingLevel} class={this.buttonClasses}>
            <button
              type="button"
              class="p-accordion__tab"
              id={`${this.sectionId}-tab`}
              aria-controls={`${this.sectionId}-section`}
              aria-expanded={this.isOpen ? 'true' : 'false'}
              onClick={this.handleClick.bind(this)}
            >
              {this.sectionTitle}
            </button>
          </div>

          {this.isOpen && (
            <section class="p-accordion__panel" id={`${this.sectionId}-section`} aria-labelledby={`${this.sectionTitle}-tab`}>
              <slot />
            </section>
          )}
        </li>
      </Host>
    );
  }
}
