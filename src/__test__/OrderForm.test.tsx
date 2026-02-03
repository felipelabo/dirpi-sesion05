import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderForm from '../components/OrderForm';
import type { MenuItem } from '../types/entities';

// Producto mock para las pruebas
const mockItem: MenuItem = {
  id: 1,
  name: 'Paella Valenciana',
  price: 15.50,
  quantity: 10,
  desc: 'Arroz con mariscos y verduras',
  img: ''
};

// Props mock
const mockProps = {
  setSelectedItem: vi.fn(),
  item: mockItem,
  setItems: vi.fn()
};

describe('OrderForm Component', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    cleanup();
    user = userEvent.setup();
    vi.clearAllMocks();
  });

  it('Render formulario de pedido correctamente', () => {
    render(<OrderForm {...mockProps} />);
    
    expect(screen.getByText('Formulario de Pedido')).toBeTruthy();
    expect(screen.getByText('Paella Valenciana')).toBeTruthy();
    expect(screen.getByLabelText(/Nombre:/i)).toBeTruthy();
    expect(screen.getByLabelText(/Cantidad:/i)).toBeTruthy();
    expect(screen.getByText('Disponible: 10')).toBeTruthy();
  });


  it('Verificar que la suma del precio equivale a la cantidad', async () => {
    render(<OrderForm {...mockProps} />);
    
    const quantityInput = screen.getByLabelText(/Cantidad:/i) as HTMLInputElement;
    
    // Escribi cantidad usando userEvent
    await user.type(quantityInput, '3');
    
    // Verifica que el input recibió el valor
    expect(quantityInput.value).toBe('3');
    
    // Verifica que el precio total se calculó correctamente
    // Precio del item: 15.50€ * Cantidad: 3 = 46.50€ 
    const priceContainer = screen.getByText('Total de la compra:').parentElement;
    expect(priceContainer?.textContent).toContain('46.50€');
  });



});
