import { Component, Prop, h, Listen } from '@stencil/core';

@Component({
  tag: 'webhook-trigger',
  styleUrl: 'webhook-trigger.css',
  shadow: true
})
export class WebhookTrigger {

  @Prop() url: string = '';

  @Prop() method: string = 'POST';

  @Prop() params: any = [];

  @Prop() name: string = "My WebHook";

  @Listen('click', { capture: true })
  trigger() {

    if (this.url) {
      var myHeaders = new Headers();

      const config = new Request(
        this.url,
        {
          method: this.method,
          headers: myHeaders,
          mode: 'cors',
          cache: 'default'
        });

      fetch(this.url,  config).then(response => {
          console.log(response);
          // todo set state depending on response code
      })
    }
  }

  render() {
    return (
      <div class="trigger">
        {this.name}
      </div>
    );
  }
}
