import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import './styles/index.scss';
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "./pages/MainPage/MainPageAsync";
import { useTheme } from "./themes/useTheme";
import { classNames } from "./utils/classNames/classNames";


function App() {

    const { theme, toggleTheme } = useTheme();

    const appClassNames = classNames({
        mainCls: 'app',
        modes: {},
        additional: [theme]
    })

    return (
        <div className={appClassNames}>
            <button onClick={toggleTheme}>Сменить тему</button>
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