import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'

import Homepage from './pages/Homepage';
import Show from './pages/Show';
import Structure from './layouts/Structure';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Structure/>}>
        <Route index element={<Navigate to='/Homepage' replace />}/>
          <Route path='/Homepage' element={<Homepage/>}/>
          <Route path='/Show' element={<Show/>}/>
          <Route path='/ProductDetail' element={<ProductDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
