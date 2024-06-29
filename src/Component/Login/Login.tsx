import React from "react";
import axios from 'axios';
import { getThemeColor, themingProps } from '../../Constants/Theme';

type Props = {
    whitelabelId: string;
}

const Login: React.FC<Props> = (props) => {
    const theme: themingProps = getThemeColor(props.whitelabelId);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const authenticateUser = () => {
        const body = {
            "whitelabelId": props.whitelabelId,
            "email": email,
            "password": password  
        }
        axios.post('/Prod/Login', (body))
        .then(response => {
            if (response.data.body.status == "Success") {
                console.log(response.data.body.data)
            }
            else {
                console.log("auth error");
            }
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className={`w-6/12 flex ${theme.bgSecond} ${theme.textFirst} font-bold flex-col rounded-md shadow-2xl m-auto my-40 p-4`}>
            <div>
                <div className={`my-2`}>
                    Email
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className={`my-2`}>
                    Password
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className={`${theme.bgFirst} ${theme.textFifth} w-1/2 p-2 m-4 rounded-md shadow-xl`} onClick={() => authenticateUser()}> Login </button>
            </div>
        </div>
    )
}

export default Login;