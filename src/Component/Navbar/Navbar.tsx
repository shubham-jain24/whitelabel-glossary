import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateUserDetails } from "../../Store/userSlice";
import { UserDetails } from "../../Store/UserDetails";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../Store/appStore";

type Props = {}
const Navbar: React.FC<Props> = (props) => {
    const userDetails: UserDetails = useSelector((store: IRootState) => store.user.userDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        const payload: UserDetails = {
            userId: '',
            userName: '',
            age: ''
        }

        dispatch(updateUserDetails(payload));
        navigate('/login');
    }

    const renderLoginSignup = () => {
        return (
            <>
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
            </>
        )
    }

    const userProfile = () => {
        return (
            <>
                <li className="px-2 hover:text-xl">
                    <Link to="/create">Create Post</Link>
                </li>
                <li className="px-2 hover:text-xl">
                    {userDetails.userName} 
                </li>
                <li className="px-2 hover:text-xl" onClick={() => handleLogout()}>
                    Logout
                </li>
            </>
        )
    }

    return (
        <ul className="flex text-l">
            <li className="px-2 hover:text-xl">
                <Link to="/">Home</Link>
            </li>
            {
                (userDetails.userName ? userProfile() : renderLoginSignup() )
            }
            
        </ul>
    )
}

export default Navbar;