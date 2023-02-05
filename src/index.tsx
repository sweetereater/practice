import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./themes/ThemeProvider";
import App from "./App";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('.root')
)