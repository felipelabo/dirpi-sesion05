import StockItem from "./StockItem";
import type { MenuItem } from '../types/entities';

interface StockListProps {
    stock: MenuItem[];
}

const StockList = ({ stock }: StockListProps) => {
    return (
    <>
        <h2 className="text-indigo-50 text-3xl font-bold mb-4">Stock Disponible</h2>
        <div className="grid grid-cols-3 gap-4 w-[80%]">
            {stock.map(item => <StockItem key={item.id} {...item} />)}
        </div>
    </>
    );
};

export default StockList;