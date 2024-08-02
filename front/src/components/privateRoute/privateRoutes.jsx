/*
    - This component checks for (token in cookies through authContext) before accessing the private pages(children)
        - Gets the authToken provided by the AuthContext
        - Allow access to children as long as the authToken is not null
*/
import { useContext } from "react";
import { AuthContext } from "contexts";
import { LoginPage } from "pages";
import PropTypes from "prop-types";

export default function PrivateRoute({ children }) {
    const { authToken } = useContext(AuthContext);
    return authToken ? children : <LoginPage />;
}

// children proptype definition
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};
