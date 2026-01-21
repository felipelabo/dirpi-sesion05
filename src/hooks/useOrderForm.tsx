import { useState, useRef, type FormEvent } from 'react';
import type { MenuItem } from '../types/entities';

interface handleSubmitParams {
    setItems: (items:MenuItem)=> void;
    item: MenuItem;
    event: FormEvent<HTMLFormElement>;
    setSelectedItem: (item:MenuItem|null)=>void;
}

const useOrderForm = () => {
  
    const [quantity, setQuantity] = useState<number>(0);
    const formRef = useRef<HTMLFormElement>(null);


    const handleQuantityChange = (newQuantity: number) => {
        setQuantity(newQuantity);
    }

    const handleSubmit = ({event,setItems,item,setSelectedItem}:handleSubmitParams ) => {
        event.preventDefault();
        console.log('Formulario enviado');
        if (formRef.current) {
            const formData = new FormData(formRef.current);
            const data = Object.fromEntries(formData.entries());
            console.log(data);
            setItems({...item, quantity: item.quantity - quantity} );
            formRef.current.reset();
            setQuantity(0);
            setSelectedItem(null);
        }
    }

    return { quantity, handleQuantityChange, formRef, handleSubmit};

};

export default useOrderForm;