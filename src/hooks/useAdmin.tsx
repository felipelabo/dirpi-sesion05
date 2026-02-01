import { useState } from "react";

const useAdmin = () => {
  const [choosePage, setChoosePage] = useState(false);

  const togglePage = () => {
    setChoosePage((prev) => !prev);
  };

  return { choosePage, togglePage };
};

export default useAdmin;