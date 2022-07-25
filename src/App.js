import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import './App.scss';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
        </Routes>
    );
}

export default App;
