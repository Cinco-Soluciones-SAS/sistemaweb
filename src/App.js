import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Ruteos } from './Ruteos';
import { DataProvider } from './Context/DataProvider';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
          <BrowserRouter>
            <Header></Header>              
            <Ruteos></Ruteos>            
          </BrowserRouter>
      </div>
      </DataProvider>
      
    
  );
}

export default App;
