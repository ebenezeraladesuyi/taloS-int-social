/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { HomePageLayout } from "../layout";
import { lazy } from "react";
import { UserSigninLayout, UserSignupLayout } from "../layout/authLayout";


const LandingPage = lazy(() => import("../pages/homePage/homePage"));
const Signup = lazy (() => import("../pages/Auth/Signup"))
const Signin = lazy (() => import("../pages/Auth/Signin"))


export const element = createBrowserRouter([
    {
        path: "/home",
        element: <HomePageLayout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    },
    {
        path: "/",
        element: <UserSigninLayout />,
        children: [
            {
                index: true,
                element: <Signin />
            }
        ]
    },
    {
        path: "/Signup",
        element: <UserSignupLayout />,
        children: [
            {
                index: true,
                element: <Signup />
            }
        ]
    },
])