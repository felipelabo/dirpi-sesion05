import { useState, useEffect } from "react";
import type { MenuItem } from "../types/entities";
import items from './../assets/data.json'

const useAdmin = () => {
  const [choosePage, setChoosePage] = useState(false);
  const [data, setData] = useState<MenuItem[]>([]);

  useEffect(() => {
    setData([...items as MenuItem[]]);
  }, []);

  const togglePage = () => {
    setChoosePage((prev) => !prev);
  };

  const handleChangeData = (newItem: MenuItem) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === newItem.id ? newItem : item
      )
    );
  }

  return { choosePage, togglePage, data, handleChangeData };
};

export default useAdmin;