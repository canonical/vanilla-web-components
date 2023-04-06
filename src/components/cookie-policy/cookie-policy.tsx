import { Component, Host, State, Listen, h } from '@stencil/core';
import { content, controlsContent } from './content';
import { hideSpecified, preferenceNotSelected, setCookie } from './utils';

@Component({
  tag: 'cookie-policy',
  styleUrl: 'cookie-policy.scss',
  shadow: true,
})
export class CookiePolicy {
  private lang = 'en';
  private notificationContent = content[this.lang].notification;
  private managerContent = content[this.lang].manager;

  @State() contentToDisplay = this.notificationContent;
  @State() isManagerOpen = false;
  @State() settingsToggled = {};
  @State() isModalOpen = false;

  componentDidLoad() {
    controlsContent.forEach(control => {
      this.settingsToggled[control.id] = !control.showSwitcher;
    });
    if (preferenceNotSelected() && !hideSpecified()) {
      this.isModalOpen = true;
    }

    const language = document.documentElement.lang;
    console.log(language);

    if (content[language]) {
      this.lang = language;
      this.notificationContent = content[this.lang].notification;
      this.managerContent = content[this.lang].manager;
      this.contentToDisplay = this.notificationContent;
    }
  }

  @Listen('revokeCookies', { target: 'document' })
  revokeCookies() {
    this.isModalOpen = true;
  }

  private handleToggleSettings = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.settingsToggled[target.id] = target.checked;

    console.log(this.settingsToggled);
  };

  private handleManageClick = () => {
    this.contentToDisplay = this.managerContent;
    this.isManagerOpen = true;
  };

  private acceptAll = () => {
    setCookie('all');
    this.isModalOpen = false;
  };

  private acceptSettings = () => {
    if (Object.values(this.settingsToggled).every(value => value)) {
      this.acceptAll();
    } else {
      for (const [key, value] of Object.entries(this.settingsToggled)) {
        if (value) setCookie(key);
      }
    }
    this.isModalOpen = false;
  };

  render() {
    if (!this.isModalOpen) return null;
    return (
      <Host>
        <div class="p-modal" id="modal">
          <div class="p-modal__dialog" role="dialog" aria-labelledby="cookie-policy-title" aria-describedby="cookie-policy-content">
            <header class="p-modal__header">
              <h2 class="p-modal__title" id="cookie-policy-title">
                {this.contentToDisplay.title}
              </h2>
            </header>
            <div id="cookie-policy-content">
              {this.contentToDisplay.body.map(paragraph => (
                <p innerHTML={paragraph}></p>
              ))}
              {this.isManagerOpen ? (
                <div>
                  <v-button appearance="positive" onClick={this.acceptAll}>
                    {this.managerContent.acceptAll}
                  </v-button>
                  <p>{this.managerContent.acceptAllHelp}</p>
                  <hr />
                  {controlsContent.map(control => (
                    <section>
                      <div>
                        {control.showSwitcher ? (
                          <label class="u-float-right p-switch">
                            <input type="checkbox" class="p-switch__input" id={control.id} onChange={this.handleToggleSettings} />
                            <span class="p-switch__slider"></span>
                          </label>
                        ) : null}
                        <h4>{control.content[this.lang].title}</h4>
                      </div>
                      <p>{control.content[this.lang].description}</p>
                    </section>
                  ))}
                  <v-button onClick={this.acceptSettings}>{this.managerContent.SavePreferences}</v-button>
                </div>
              ) : (
                <div class="p-modal__footer">
                  <v-button appearance="positive" onClick={this.acceptAll}>
                    {this.notificationContent.buttonAccept}
                  </v-button>
                  <v-button onClick={this.handleManageClick}>{this.notificationContent.buttonManage}</v-button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
