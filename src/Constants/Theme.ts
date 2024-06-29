export interface themingProps {
    bgFirst: string;
    bgSecond: string;
    bgThird: string;
    bgFourth: string;
    bgFifth: string;
    textFirst: string;
    textSecond: string;
    textThird: string;
    textFourth: string;
    textFifth: string;
}

const whitelabelId1 = {
    bgFirst: "bg-amber-900",
    bgSecond: "bg-yellow-600",
    bgThird: "bg-yellow-400",
    bgFourth: "bg-yellow-50",
    bgFifth: "bg-amber-200",
    textFirst: "text-amber-900",
    textSecond:"text-yellow-600",
    textThird: "text-yellow-400",
    textFourth: "text-yellow-50",
    textFifth: "text-amber-200",
} as themingProps;

const whitelabelId2 = {
    bgFirst: "bg-blue-900", // Dark text and header footer
    bgSecond: "bg-blue-300", // Login and signup box - Bright dark
    bgThird: "bg-blue-400", //  Extra
    bgFourth: "bg-sky-50", // Base Background and text on dark
    bgFifth: "bg-blue-200", // Post Background
    textFirst: "text-blue-900",
    textSecond:"text-blue-300",
    textThird: "text-blue-400",
    textFourth: "text-sky-50",
    textFifth: "text-blue-200",
} as themingProps

const whitelabelId3 = {
    bgFirst: "bg-teal-950", // Dark text and header footer
    bgSecond: "bg-teal-400", // Login and signup box - Bright dark
    bgThird: "bg-blue-400", //  Extra
    bgFourth: "bg-emerald-50", // Base Background and text on dark
    bgFifth: "bg-teal-200", // Post Background
    textFirst: "text-teal-900",
    textSecond:"text-teal-400",
    textThird: "text-blue-400",
    textFourth: "text-emerald-50",
    textFifth: "text-teal-200",
} as themingProps

const defaultTheme = {
    bgFirst: "bg-blue-800",
    bgSecond: "bg-blue-300",
    bgThird: "bg-slate-400",
    bgFourth: "bg-slate-300",
    bgFifth: "bg-violet-100",
    textFirst: "bg-blue-800",
    textSecond:"bg-blue-300",
    textThird: "bg-slate-400",
    textFourth: "bg-slate-300",
    textFifth: "bg-violet-100",
} as themingProps

export const getThemeColor = (id: string): themingProps => {
    switch(id){
        case "1":
            return whitelabelId1;
        case "2":
            return whitelabelId2;
        case "3":
            return whitelabelId3;
        default:
            return defaultTheme;
    }
}

