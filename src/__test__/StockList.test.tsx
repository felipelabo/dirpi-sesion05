import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen, cleanup} from '@testing-library/react';
import StockList from '../components/StockList';

// Mock del hook useStockList
vi.mock('../hooks/useStockList', () => ({
  default: () => ({
    data: [
      { id: 1, name: 'Paella Valenciana', price: 15.50, quantity: 8, desc: '', img: '' },
      { id: 2, name: 'Tortilla Española', price: 9.00, quantity: 12, desc: '', img: '' },
      { id: 3, name: 'Gazpacho Andaluz', price: 6.50, quantity: 15, desc: '', img: '' },
      { id: 4, name: 'Jamón Ibérico', price: 22.00, quantity: 3, desc: '', img: '' }
    ]
  })
}));

describe('StockList Component', () => {

    beforeEach(() => {
        cleanup();
    });

    it('Render cabecera de pagina de Stock', () => {
        render(<StockList />);
        const headingElement = screen.getByText(/Stock Disponible/i);
        expect(headingElement).toBeTruthy();
    });

    it('Render del numero de items en la lista', () => {
        render(<StockList />);
        // Verifica que se rendericen exactamente 4 elementos
        const paellaItem = screen.getByRole('heading', { name: /Paella Valenciana/i });
        const tortillaItem = screen.getByRole('heading', { name: /Tortilla Española/i });
        const gazpachoItem = screen.getByRole('heading', { name: /Gazpacho Andaluz/i });
        const jamonItem = screen.getByRole('heading', { name: /Jamón Ibérico/i });
        
        expect(paellaItem).toBeTruthy();
        expect(tortillaItem).toBeTruthy();
        expect(gazpachoItem).toBeTruthy();
        expect(jamonItem).toBeTruthy();
    });

    it('Render la propiedad stock de cada item', () => {
        render(<StockList />);
        
        // Verifica stock específico de cada producto según el mock
        expect(screen.getByText('8')).toBeTruthy(); // Paella Valenciana: stock 8
        expect(screen.getByText('12')).toBeTruthy(); // Tortilla Española: stock 12
        expect(screen.getByText('15')).toBeTruthy(); // Gazpacho Andaluz: stock 15
        expect(screen.getByText('3')).toBeTruthy(); // Jamón Ibérico: stock 3
    });
});