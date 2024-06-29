import MainPage from "./Component/MainPage/MainPage";


type Props = {
  whitelabelId: string;
}

export default function App(props: Props) {
  return (
    <div className="h-auto">
      <MainPage whitelabelId={props.whitelabelId} />
    </div>
  );
}
