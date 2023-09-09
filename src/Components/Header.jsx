import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className="navbar bg-primary text-primary-content">
                <Link to='\' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                <Link to='/'>Home</Link>
                <Link to='/login'>LogIn</Link>
                <Link to='/signup'>SignUp</Link>
            </div>


        </>
    );
};

export default Header;