import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import AddService from './pages/AddService/AddService';
import CheckOut from './pages/CheckOut/CheckOut';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ManageService from './pages/ManageService/ManageService';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Footer from './shared/Footer/Footer';
import Header from './shared/Header/Header';
import NotFound from './shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
      <Route path='/addservice' element={<RequireAuth><AddService></AddService></RequireAuth>}></Route>
      <Route path='/manageservice' element={<RequireAuth><ManageService></ManageService></RequireAuth>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
