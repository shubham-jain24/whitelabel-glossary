import React from "react";
import axios from 'axios';
import ThemeContext from "../../Utils/ThemeContext";

type Props = {
    whitelabelId: string;
}

const Signup: React.FC<Props> = (props) => {
    const themeContext = React.useContext(ThemeContext);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const registerUser = () => {
        const body = {
            "name": name,
            "age": age,
            "whitelabelId": props.whitelabelId,
            "email": email,
            "password": password  
        }
        axios.post('/Prod/Register', (body))
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <div className={`w-6/12 flex ${themeContext.bgSecond} ${themeContext.textFirst} font-bold flex-col rounded-md shadow-2xl m-auto my-40 p-4`}>
            <div>
                <div className={`my-2`}>
                    Name
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="my-2">
                    Age
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="number" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="my-2">
                    Email
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div>
                <div className="my-2">
                    Password
                </div>
                <div>
                    <input className="w-full rounded-md p-1 shadow-lg" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="flex justify-center mt-5">
                <button className={`${themeContext.bgFirst} ${themeContext.textFifth} w-1/2 p-2 m-4 rounded-md shadow-xl`} onClick={registerUser}> Register </button>
            </div>
            
        </div>
    )
}

export default Signup;