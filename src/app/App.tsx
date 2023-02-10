import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "./themes";
import { classNames } from "shared/lib/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";


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
            <Link to='/about'>To About page</Link>
            <Link to='/'>To Main page</Link>
            <Suspense fallback='Loading...'>
                <Routes>
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;