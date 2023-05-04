import { Component, Host, h, Prop, State } from '@stencil/core';
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
  @Prop() dismissible?: boolean;
  @Prop() notificationTitle: string;

  @State() isDismiss:boolean = false;

  private classes = classNames(
    this.severity ? `p-notification--${this.severity}` : 'p-notification--infomration',
  );

  handleClick() {
    this.isDismiss= !this.isDismiss
  }

  render() {
    if (this.isDismiss) return null;
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
            {this.dismissible && <button class="p-notification__close" data-testid="notification-close-button" onClick={this.handleClick.bind(this)} />}
          </div>
        </div>
      </Host>
    );
  }
}
