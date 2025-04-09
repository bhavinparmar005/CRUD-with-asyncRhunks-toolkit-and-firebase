import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Showdata from './Pages/Showdata';
import AddData from './Pages/AddData';
import EditData from './Pages/EditData';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Showdata />} />
          <Route path='/add' element={<AddData />} />
          <Route path='/edit' element={<EditData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
