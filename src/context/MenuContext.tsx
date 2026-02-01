import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { MenuItem } from '../types/entities';
import items from '../assets/data.json'


// Interfaz del contexto
interface ContextType {
  data: MenuItem[];
  handleChangeData: (newItem: MenuItem) => void;
}

// Estado inicial
const initialState: MenuItem[] = [];

// Creación del contexto
const Context = createContext<ContextType | undefined>(undefined);

// Props del provider
interface ProviderProps {
  children: ReactNode;
}

// Provider del contexto
export function MenuProvider({ children }: ProviderProps) {
  const [data, setData] = useState<MenuItem[]>(initialState);

  useEffect(() => {
    setData([...items as MenuItem[]]);
  }, []);

  const handleChangeData = (newItem: MenuItem) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === newItem.id ? newItem : item
      )
    );
  }

  const value: ContextType = {
    data,handleChangeData
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// Hook personalizado para usar el contexto
export function useMenuContext() {
  const context = useContext(Context);
  
  if (context === undefined) {
    throw new Error('useContext debe ser usado dentro de un Provider');
  }
  
  return context;
}

// Exportar tipos
export type { ContextType };
