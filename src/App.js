import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataTable from './Component/DataTable';
import DataDetail from './Component/DataDetail';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<DataTable />}/>
            <Route path='/DataDetail' element={<DataDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
