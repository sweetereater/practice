import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "./themes";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./router";


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
            <AppRouter />
        </div>
    );
}

export default App;