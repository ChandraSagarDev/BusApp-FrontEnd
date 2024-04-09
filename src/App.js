import logo from './logo.svg';
import './App.css';
import DelPg from './components/DelPg';
import SearchPg from './components/SearchPg';
import AddBus from './components/AddBus';
import ViewBus from './components/ViewBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path='/' element={<ViewBus/>} />
<Route path='/add' element={<AddBus/>} />
<Route path='/search' element={<SearchPg/>} />
<Route path='/del' element={<DelPg/>} />

</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
