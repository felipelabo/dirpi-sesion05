import useOrderForm from "../hooks/useOrderForm";
import type { MenuItem as MenuItemType } from '../types/entities';

interface OrderFormProps {
    setSelectedItem: (item:MenuItemType|null) => void;
    item: MenuItemType;
    setItems:(item:MenuItemType)=>void;
}

const OrderForm = ({setSelectedItem,item,setItems}:OrderFormProps) => {

    const { quantity, handleQuantityChange, formRef, handleSubmit } = useOrderForm();

    return (
    <div className="w-[50%]">
        <form 
            onSubmit={(event)=>handleSubmit({event,item,setItems,setSelectedItem})} 
            ref={formRef} 
            className="flex flex-col items-start bg-indigo-100 p-6 rounded-lg w-full"
        >
            <h2 className="text-indigo-700 text-2xl font-bold mb-1">Formulario de Pedido</h2>
            <h4 className="text-indigo-500 text-xl font-bold mb-4">{item.name}</h4>
            <label className="mb-2 w-full text-indigo-700">
                Nombre:
                <input type="text" name="name" className="p-1 rounded border border-indigo-300 w-full bg-white"/>
            </label>
            <label className="mb-4 w-full text-indigo-700">
                Cantidad:
                <input 
                    type="number" 
                    name="quantity"
                    className="p-1 rounded border border-indigo-300 w-full bg-white"
                    onChange={(e)=>handleQuantityChange(Number(e.target.value))}
                />
                <span className="text-xs text-gray-600"> Disponible: {item.quantity}</span>
            </label>
            <div className="text-indigo-500 font-bold mb-6">
                Total de la compra: <span className="font-bold text-lg text-green-500">{((quantity)*(item.price)).toFixed(2)}€</span>
            </div>
            <div className="flex gap-4 mt-4">
                <button 
                    type="submit" 
                    className={`px-4 py-2 ${ quantity > 0 && quantity < item.quantity ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-600'}  text-white font-bold rounded-lg `}
                    disabled={!(quantity > 0 && quantity < item.quantity)}
                    
                >
                    Enviar Pedido
                </button>
                <button 
                    type="button" 
                    className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400"
                    onClick={()=>setSelectedItem(null)}
                >
                    Cancelar
                </button>
            </div>
            
        </form>
    </div>
  );
};

export default OrderForm;