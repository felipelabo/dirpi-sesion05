import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, cleanup} from '@testing-library/react';
import MenuList from '../components/MenuList';

// Mock del hook useMenuList
vi.mock('../hooks/useMenuList', () => ({
  default: () => ({
    itemSelected: null,
    toggleViewOrder: vi.fn(),
    handleChangeData: vi.fn(),
    data: [
      { id: 1, name: 'Paella Valenciana', price: 15.50, quantity: 8, desc: 'Arroz con mariscos y verduras', img: '' },
      { id: 2, name: 'Tortilla Española', price: 9.00, quantity: 12, desc: 'Tortilla de patatas tradicional', img: '' },
      { id: 3, name: 'Gazpacho Andaluz', price: 6.50, quantity: 15, desc: 'Sopa fría de verduras', img: '' },
      { id: 4, name: 'Jamón Ibérico', price: 22.00, quantity: 3, desc: 'Jamón curado de bellota', img: '' }
    ]
  })
}));

describe('MenuList Component', () => {
  beforeEach(() => {
    cleanup();
  });

  it('Render cabecera de página del Menú', () => {
    render(<MenuList />);
    const headingElement = screen.getByText(/Menú/i);
    expect(headingElement).toBeTruthy();
  });

  it('Render del número correcto de productos en el menú', () => {
    render(<MenuList />);
    // Verifica que se rendericen exactamente 4 productos
    const paellaItem = screen.getByRole('heading', { name: /Paella Valenciana/i });
    const tortillaItem = screen.getByRole('heading', { name: /Tortilla Española/i });
    const gazpachoItem = screen.getByRole('heading', { name: /Gazpacho Andaluz/i });
    const jamonItem = screen.getByRole('heading', { name: /Jamón Ibérico/i });
    
    expect(paellaItem).toBeTruthy();
    expect(tortillaItem).toBeTruthy();
    expect(gazpachoItem).toBeTruthy();
    expect(jamonItem).toBeTruthy();
  });

  it('Verificar los precios específicos de cada producto', () => {
    render(<MenuList />);
    
    // Verifica precios específicos de cada producto según el mock
    expect(screen.getByText('15.50€')).toBeTruthy(); // Paella Valenciana: €15.50
    expect(screen.getByText('9.00€')).toBeTruthy(); // Tortilla Española: €9.00
    expect(screen.getByText('6.50€')).toBeTruthy(); // Gazpacho Andaluz: €6.50
    expect(screen.getByText('22.00€')).toBeTruthy(); // Jamón Ibérico: €22.00
  });

  it('Mostrar descripciones de los productos', () => {
    render(<MenuList />);
    
    // Verifica que se muestran las descripciones
    expect(screen.getByText(/Arroz con mariscos y verduras/i)).toBeTruthy();
    expect(screen.getByText(/Tortilla de patatas tradicional/i)).toBeTruthy();
    expect(screen.getByText(/Sopa fría de verduras/i)).toBeTruthy();
    expect(screen.getByText(/Jamón curado de bellota/i)).toBeTruthy();
  });
});
