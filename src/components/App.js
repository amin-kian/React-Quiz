import Header from "./Header";
import Main from "./main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/quizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            <Footer>
              <NextButton />
              <Timer />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishedScreen />}
      </Main>
    </div>
  );
}
