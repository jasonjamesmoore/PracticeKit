import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useParams } from "react-router-dom";
import  Layout  from "./components/Layout";
import { Home }  from "./Routes/Home";
import { Settings } from "./Routes/Settings";
import { DegreeFinder } from "./quizModes/DegreeFinder";
import { NoteFinder } from "./quizModes/NoteFinder";
import { KeyFinder } from "./quizModes/KeyFinder";
import { KeyOnly } from "./quizModes/KeyOnly";
import { Mode } from "./types/Mode";

const quizComponents: Record<string, React.ComponentType> = {
  [Mode.DEGREE_FINDER]: DegreeFinder,
  [Mode.NOTE_FINDER]: NoteFinder,
  [Mode.KEY_FINDER]: KeyFinder,
  [Mode.KEY_ONLY]: KeyOnly,
};

function QuizRoute() {
  const { mode } = useParams<{ mode: string }>();
  const QuizComponent = mode ? quizComponents[mode] : null;
  return QuizComponent ? <QuizComponent /> : <div>Quiz not found</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/quiz/:mode",
        element: <QuizRoute />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);


export function Router() {
  return <RouterProvider router={router} />;
}
