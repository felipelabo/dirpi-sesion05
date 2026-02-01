import StockItem from "./StockItem";
import useStockList from "../hooks/useStockList";

const StockList = () => {

    const { data } = useStockList();

    return (
    <>
        <h2 className="text-indigo-50 text-3xl font-bold mb-4">Stock Disponible</h2>
        <div className="grid grid-cols-3 gap-4 w-[80%]">
            {data.map(item => <StockItem key={item.id} {...item} />)}
        </div>
    </>
    );
};

export default StockList;