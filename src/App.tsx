import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import './index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";

function App() {
    return (
        <div className="app">
            <Link to='/counter'>Counter</Link>
            <Link to='/about'>To About page</Link>
            <Link to='/'>To Main page</Link>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/counter' element={<Counter />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;