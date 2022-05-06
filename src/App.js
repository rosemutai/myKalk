import logo from './logo.svg';
import './index.css';
import Index from './components/Index';

function App() {
  return (
    <div className="App w-full bg-slate-100 dark:bg-gray-800">
      {/* <div className='circle absolute bg-orangish z-20 w-56 h-56 rounded-bl-full top-0 right-0'></div> */}
      {/* <div className='circle absolute bg-orangish -z-10 w-56 h-56 rounded-bl-full bottom-0 left-0'></div>  */}
     
      <Index />
    </div>
  );
}

export default App;
