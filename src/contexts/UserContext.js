import { createContext } from "react";

const AuthContext = createContext();

const UserContext = (props) => {
    const user = {displayName: 'Akash'};
    const authInfo = {user: user};

    return (
        
            <AuthContext.Provider value={authInfo}>
                {props}
            </AuthContext.Provider>
    );
};

export default UserContext;