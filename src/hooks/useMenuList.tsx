import { useState } from 'react';
import type { MenuItem } from '../types/entities';
import { useMenuContext } from "../context/MenuContext";

const useMenuList = () => {
    const [itemSelected, setItemSelected] = useState<MenuItem|null>(null);
    const { data,handleChangeData } = useMenuContext();

    const toggleViewOrder = (order: MenuItem|null) => {
        if (order == null) setItemSelected(null);
        else setItemSelected(order)
    }

    return { itemSelected, toggleViewOrder, data, handleChangeData };
};

export default useMenuList;