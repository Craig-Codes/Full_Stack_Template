import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { StoRRoutes } from './components/stoRRoutes'

const App = () => {

  return (
    <BrowserRouter>
      <StoRRoutes/>
    </BrowserRouter>
    
  );
};

export default App;
