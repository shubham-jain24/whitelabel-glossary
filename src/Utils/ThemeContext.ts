import React from "react"
import { themingProps } from '../Constants/Theme';

const ThemeContext = React.createContext({
    bgFirst: "",
    bgSecond: "",
    bgThird: "",
    bgFourth: "",
    bgFifth: "",
    textFirst: "",
    textSecond:"",
    textThird: "",
    textFourth: "",
    textFifth: "",
} as themingProps);

export default ThemeContext;