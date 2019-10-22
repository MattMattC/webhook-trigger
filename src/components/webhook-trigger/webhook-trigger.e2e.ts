import { newE2EPage } from '@stencil/core/testing';

describe('webhook-trigger', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<webhook-trigger></webhook-trigger>');

    const element = await page.find('webhook-trigger');
    expect(element).toHaveClass('hydrated');
  });
});
