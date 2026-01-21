import { useState } from 'react';
import type { MenuItem } from '../types/entities';

const useMenuList = () => {
    const [itemSelected, setItemSelected] = useState<MenuItem|null>(null);

    const toggleViewOrder = (order: MenuItem|null) => {
        if (order == null) setItemSelected(null);
        else setItemSelected(order)
    }

    return { itemSelected, toggleViewOrder };
};

export default useMenuList;