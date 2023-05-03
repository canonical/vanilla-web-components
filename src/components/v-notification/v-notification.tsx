import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'v-notification',
  styleUrl: 'v-notification.scss',
  shadow: true,
})
export class VNotification {

  private Notificationseverity = {
    INFORMATION: 'information',
    CAUTION: 'caution',
    NEGATIVE: 'negative',
    POSITIVE: 'positive',
  } as const;

  @Prop() severity?: (typeof this.Notificationseverity)[keyof typeof this.Notificationseverity];
 
  private classes = classNames(
    this.severity ? `p-notification--${this.severity}` : 'p-notification--infomration',
  );

  @Prop() notificationTitle: string;

  render() {
    return (
      <Host>
        <div class={this.classes}>
          <div class="p-notification__content">
            <h5 class="p-notification__title">
              {this.notificationTitle}
            </h5>
            <p class="p-notification__message">
              <slot />
            </p>
          </div>
        </div>
      </Host>
    );
  }

}
