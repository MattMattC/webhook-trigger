import { WebhookTrigger } from './webhook-trigger';

describe('webhook-trigger', () => {
  it('builds', () => {
    expect(new WebhookTrigger()).toBeTruthy();
  });
});
