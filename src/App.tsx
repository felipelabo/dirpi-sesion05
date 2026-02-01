import './App.css'
import StockList from './components/StockList';
import useAdmin from './hooks/useAdmin';
import MenuList from './components/MenuList';

function App() {

  const { choosePage, togglePage } = useAdmin();

  return (
    <div className='p-6 flex flex-col items-center'>
      <h1 className='text-indigo-50 text-5xl font-bold mb-6'>Comida Española</h1>
      <button 
        className='mb-6 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600'
        onClick={togglePage}
      >
        {!choosePage ? 'Realizar pedido' : 'Visualizar stock'}
      </button>
      {!choosePage && <StockList/>}
      {choosePage && <MenuList/>}
    </div>
  )
}

export default App
