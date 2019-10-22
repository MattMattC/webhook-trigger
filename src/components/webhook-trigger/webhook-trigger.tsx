import { Component, h } from '@stencil/core';

@Component({
  tag: 'webhook-trigger',
  styleUrl: 'webhook-trigger.css',
  shadow: true
})
export class WebhookTrigger {

  render() {
    return (
      <div class="trigger">
        WebhookTrigger
      </div>
    );
  }

}
