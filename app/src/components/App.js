import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./about/About";
import Profile from "./profile/Profile";
import Results from "./results/Results";
import Search from "./search/Search";
import Submission from "./submission/Submission";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search></Search>,
  },
  {
    path: "/search",
    element: <Search></Search>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/results",
    element: <Results></Results>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
