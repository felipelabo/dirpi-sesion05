import { useMenuContext } from "../context/MenuContext";

const useStockList = () => {
    const { data } = useMenuContext();

    return { data };
};

export default useStockList;