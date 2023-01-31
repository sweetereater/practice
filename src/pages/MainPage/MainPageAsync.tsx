import { lazy } from "react";

export const MainPageAsync = lazy(() => new Promise((res, rej) => {

    setTimeout(() => {
        //@ts-ignore
        res(import('./MainPage'))
    }, 2000)
}))