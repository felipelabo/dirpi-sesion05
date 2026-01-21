import type { MenuItem as MenuItemType } from '../types/entities';

interface MenuItemProps {
    item: MenuItemType;
    selectItem?: (item: MenuItemType|null) => void;
}

const MenuItem = ({item,selectItem}: MenuItemProps) => {
  return (
    <div className='flex flex-col rounded-lg p-4 bg-indigo-100 cursor-pointer hover:shadow-lg' onClick={() => selectItem?.(item)}>
        {/*<img src={item.img} alt={item.name} className='mb-4 rounded-md'/>*/}
        <div className='w-full h-64 mb-4 bg-indigo-300 flex items-center justify-center rounded-md'>
            <span className='text-indigo-700 font-bold'>Imagen</span>
        </div>
        <div className='flex flex-col flex-1'>
            <h2 className='text-indigo-500 font-bold'>{item.name}</h2>
            <p className='text-black mb-2 flex-1 mb-4'>{item.desc}</p>
            {item.quantity > 0 && <p className='text-green-700 text-lg font-bold text-right'>{item.price.toFixed(2)}€</p>}
            {item.quantity == 0 && <p className='text-red-700 text-lg font-bold text-right'>Sin Stock</p>}
        </div>
    </div>
  );
};

export default MenuItem;