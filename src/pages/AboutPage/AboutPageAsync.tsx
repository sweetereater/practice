import { lazy } from "react";

export const AboutPageAsync = lazy(() => new Promise((res, rej) => {

    setTimeout(() => {
        //@ts-ignore
        res(import('./AboutPage'))
    }, 2000)
}))