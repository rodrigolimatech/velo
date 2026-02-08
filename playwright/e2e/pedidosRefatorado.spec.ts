import { test, expect } from '@playwright/test'

// AAA - Arrange (Preparar), Act (Agir), Assert (Verificar)

test('deve consultar um pedido aprovado', async ({ page }) => {
  
    const numeroPedido = 'VLO-TR3ULP';
    
    // Arrange
    await page.goto('http://localhost:5173/');
    await page.getByRole('link', { name: 'Consultar Pedido' }).click();

    // Act
    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill(numeroPedido);
    await page.getByRole('button', { name: 'Buscar Pedido' }).click();

    // Assert
    const resultadoCard = page.locator('div.animate-fade-in'); 
    await expect(resultadoCard.getByText(numeroPedido)).toBeVisible({timeout: 10_000});
    await expect(resultadoCard.getByText('APROVADO')).toBeVisible();
  });