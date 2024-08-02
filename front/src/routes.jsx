import {
    LandingPage,
    NotFoundPage,
    UploadPage,
    PreviewPage,
    SubmitPage,
    LoginPage,
    RegisterPage,
    SoonPage,
} from "pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <NotFoundPage />,
    },
    {
        path: "/upload",
        element: <UploadPage />,
    },
    {
        path: "/upload/preview",
        element: <PreviewPage />,
    },
    {
        path: "/upload/preview/submit",
        element: <SubmitPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/soon",
        element: <SoonPage />,
    },
]);

export default router;
