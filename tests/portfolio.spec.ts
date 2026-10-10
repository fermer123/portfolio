import { expect, test } from '@playwright/test';

test('page content and language switch work', async ({ page }) => {
  await page.goto('./');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.locator('header nav a')).toHaveCount(4);

  await page.getByRole('button', { name: 'Switch to Russian' }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ru');
  await expect(
    page.getByRole('button', { name: 'Переключить на английский' }),
  ).toBeVisible();
});

test('header controls stay inside the viewport at responsive widths', async ({
  page,
}) => {
  for (const width of [320, 375, 480, 768, 960, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('./');

    const controls = await page
      .locator('header a, header button')
      .evaluateAll((elements) =>
        elements.map((element) => {
          const { left, right } = element.getBoundingClientRect();
          return { left, right };
        }),
      );

    expect(
      controls.every(({ left, right }) => left >= 0 && right <= width),
      `header control overflow at ${width}px: ${JSON.stringify(controls)}`,
    ).toBe(true);

    const documentWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    expect(documentWidth, `page overflow at ${width}px`).toBeLessThanOrEqual(
      width,
    );
  }
});
