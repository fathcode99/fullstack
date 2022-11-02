import DataTable from "./pages/dataTable";
import Add from "./pages/addNew"; 
import Edit from "./pages/edit"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="add" element={<Add />} />
        <Route path="users/:id" element={<Edit />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
