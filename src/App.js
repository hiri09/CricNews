import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
//import Cricbuzz from './compoenents/Cricbuzz';
import Getmatches from './compoenents/Getmatches';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Getmatches />} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
