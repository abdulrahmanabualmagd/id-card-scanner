import { RouterProvider } from "react-router-dom";
import router from "routes";
import { AuthProvider, FileProvider } from "contexts";
import "css";

export default function App() {
    return (
        <>
            {/* contains the authtoken if found, login/logout methods */}
            <AuthProvider>
                {/* contains the routes and the private routes also in routes fille */}
                <FileProvider>
                    <RouterProvider router={router} />
                </FileProvider>
            </AuthProvider>
        </>
    );
}
