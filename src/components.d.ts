/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface WebhookTrigger {
    'method': string;
    'name': string;
    'params': any;
    'url': string;
  }
}

declare global {


  interface HTMLWebhookTriggerElement extends Components.WebhookTrigger, HTMLStencilElement {}
  const HTMLWebhookTriggerElement: {
    prototype: HTMLWebhookTriggerElement;
    new (): HTMLWebhookTriggerElement;
  };
  interface HTMLElementTagNameMap {
    'webhook-trigger': HTMLWebhookTriggerElement;
  }
}

declare namespace LocalJSX {
  interface WebhookTrigger {
    'method'?: string;
    'name'?: string;
    'params'?: any;
    'url'?: string;
  }

  interface IntrinsicElements {
    'webhook-trigger': WebhookTrigger;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'webhook-trigger': LocalJSX.WebhookTrigger & JSXBase.HTMLAttributes<HTMLWebhookTriggerElement>;
    }
  }
}


