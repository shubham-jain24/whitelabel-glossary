import React from "react";
import axios from "axios";
import ThemeContext from "../../Utils/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../Store/userSlice";
import { UserDetails } from "../../Store/UserDetails";
import { useNavigate } from "react-router-dom";

type Props = {
  whitelabelId: string;
};

const Login: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeContext = React.useContext(ThemeContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const authenticateUser = () => {
    const body = {
      whitelabelId: props.whitelabelId,
      email: email,
      password: password,
    };
    axios
      .post("/Prod/Login", body)
      .then((response) => {
        if (response.data.body.status == "Success") {
          const result = response.data.body;
          const payload: UserDetails = {
            userId: result.UserId,
            age: result.Age,
            userName: result.Name,
          };
          dispatch(updateUserDetails(payload));
          setEmail("");
          setPassword("");
          navigate("/");
        } else {
          console.log("auth error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className={`w-6/12 flex ${themeContext.bgSecond} ${themeContext.textFirst} font-bold flex-col rounded-md shadow-2xl m-auto my-40 p-4`}
    >
      <div>
        <div className={`my-2`}>Email</div>
        <div>
          <input
            className="w-full rounded-md p-1 shadow-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div className={`my-2`}>Password</div>
        <div>
          <input
            className="w-full rounded-md p-1 shadow-lg"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className={`${themeContext.bgFirst} ${themeContext.textFifth} w-1/2 p-2 m-4 rounded-md shadow-xl`}
          onClick={() => authenticateUser()}
        >
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
