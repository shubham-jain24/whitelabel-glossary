import "./styles.css";
import MainPage from "./Component/MainPage/MainPage";
const whitelabelId = "1";
const pathName = `./Constants/Theme${whitelabelId}.css`;
import(pathName);

export default function App() {
  return (
    <div className="App">
      <MainPage whitelabelId={whitelabelId} />
    </div>
  );
}
