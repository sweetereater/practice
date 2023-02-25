import './styles/index.scss';
import { useTheme } from "./themes";
import { classNames } from "shared/lib/classNames";
import { AppRouter } from "./router";
import { NavBar } from 'widgets/NavBar';


function App() {
    const { theme, toggleTheme } = useTheme();

    const appClassNames = classNames({
        mainCls: 'app',
        modes: {},
        additional: [theme]
    })

    return (
        <div className={appClassNames}>
            <NavBar />
            <AppRouter />
        </div>
    );
}

export default App;