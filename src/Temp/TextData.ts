export type PageData = {
  pageDetails: {
    title: string;
    logo: string;
  };
  personalDetails: {
    name: string;
    email: string;
    phone: string;
    instaAccountLink: string;
    linkedInAccountLink: string;
    twitterAccountLink: string;
  };
};
const TextData = (): PageData => {
  return {
    pageDetails: {
      title: "My Blog Spot",
      logo: "src/Assets/Images/Logo/2.png",
    },
    personalDetails: {
      name: "",
      email: "shubhjain24999@gmail.com",
      phone: "9212046872",
      instaAccountLink: "",
      linkedInAccountLink: "",
      twitterAccountLink: "",
    },
  };
};

export { TextData };
