import { test, expect } from '@playwright/test'

// AAA - Arrange (Preparar), Act (Agir), Assert (Verificar)

test('deve consultar um pedido aprovado', async ({ page }) => {
  
  // Arrange
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  // Act
  //await page.getByTestId('search-order-id').fill('')

  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-TR3ULP')
  await page.locator('//button[text()="Buscar Pedido"]').click()
  //await page.getByTestId('search-order-button').click()
  // await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  // Assert
  // await page.waitForTimeout(10000) // Exemplo de Thread Sleep que não é boa prática no mercado

  await page.locator('//*[@id="root"]/div[2]/div/div[2]/div[1]/div/div[1]/div/p[2]').isVisible({timeout: 10_000})
  await expect(page.locator('//*[@id="root"]/div[2]/div/div[2]/div[1]/div/div[1]/div/p[2]')).toContainText('VLO-TR3ULP')

  // await expect(page.getByTestId('order-result-id')).toBeVisible({timeout: 10_000})
  // await expect(page.getByTestId('order-result-id')).toContainText('VLO-TR3ULP')

  // await page.locator('//*[@id="root"]/div[2]/div/div[2]/div[1]/div/div[1]/div/p[2]').isVisible()
  // await page.locator('svg').isVisible()
  await page.locator('svg >> text=APROVADO').isVisible()

  // await expect(page.getByTestId('order-result-status')).toBeVisible()
  // await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

})