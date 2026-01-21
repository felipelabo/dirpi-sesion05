import type { MenuItem } from '../types/entities';


const StockItem = (menuItem:MenuItem) => {
  return (
    <div className='flex flex-col rounded-lg p-4 bg-indigo-100'>
        <h2 className='text-indigo-500 font-bold'>{menuItem.name}</h2>
        <p className='text-black'>stock: 
            <span className='font-bold pl-2 text-lg'>{menuItem.quantity}</span>
        </p>
    </div>
  );
};

export default StockItem;