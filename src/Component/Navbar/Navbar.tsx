import { Link } from "react-router-dom";

type Props = {}
const Navbar: React.FC<Props> = (props) => {
    return (
        <ul className="flex text-l">
            <li className="px-2 hover:text-xl">
                <Link to="/">Home</Link>
            </li>
            <li className="px-2 hover:text-xl">
                <Link to="/create">Create Post</Link>
            </li>
            <li className="px-2 hover:text-xl">
                <Link to="/">
                    User Details 
                </Link>
            </li>
            <li className="px-2 hover:text-xl">
                <Link to="/login">
                    <button>Login</button>
                </Link>
            </li>
            <li className="px-2 hover:text-xl">
                <Link to="/signup">
                    <button>SignUp</button>
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;