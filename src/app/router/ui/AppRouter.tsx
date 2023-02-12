import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RoutesConfig } from "../config/Routes";

function AppRouter() {
    console.log('AppRouter is ok')
    return (
        <Suspense fallback='Loading...'>
            <Routes>
                {
                    Object.values(RoutesConfig).map(({ path, element }) =>
                        <Route key={path} path={path} element={element} />)
                }
            </Routes>
        </Suspense>
    );
}

export { AppRouter };