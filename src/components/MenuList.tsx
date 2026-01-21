import MenuItem from "./MenuItem";
import type { MenuItem as MenuItemType } from '../types/entities';
import useMenuList from "../hooks/useMenuList";
import OrderForm from "./OrderForm";

interface MenuListProps {
    items: MenuItemType[];
    setItems:(items:MenuItemType)=>void;
}

const MenuList = ({items,setItems}:MenuListProps) => {

    const { itemSelected, toggleViewOrder } = useMenuList();

    return (
        <>
            <h2 className="text-indigo-50 text-3xl font-bold mb-4">Menú</h2>
            {itemSelected == null && <div className="grid grid-cols-3 gap-4 w-[80%]">
                { items.map(item => <MenuItem key={item.id} item={item} selectItem={toggleViewOrder} />)}
            </div>}
            {itemSelected != null && <OrderForm setSelectedItem={toggleViewOrder} item={itemSelected} setItems={setItems}/>}
        </>
    );
}

export default MenuList;