import MenuItem from "./MenuItem";
import useMenuList from "../hooks/useMenuList";
import OrderForm from "./OrderForm";

const MenuList = () => {

    const { itemSelected, toggleViewOrder, data, handleChangeData } = useMenuList();

    return (
        <>
            <h2 className="text-indigo-50 text-3xl font-bold mb-4">Menú</h2>
            {itemSelected == null && <div className="grid grid-cols-3 gap-4 w-[80%]">
                { data.map(item => <MenuItem key={item.id} item={item} selectItem={toggleViewOrder} />)}
            </div>}
            {itemSelected != null && <OrderForm setSelectedItem={toggleViewOrder} item={itemSelected} setItems={handleChangeData}/>}
        </>
    );
}

export default MenuList;