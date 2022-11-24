import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./about/About";
import Profile from "./profile/Profile";
import Results from "./results/Results";
import Search from "./search/Search";
import Submission from "./submission/Submission";
import ErrorPage from "./error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search></Search>,
    errorElement: <ErrorPage />,
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
    path: "/results/:resultid",
    element: <Results></Results>,
  },
  {
    path: "/results",
    element: <Results></Results>,
  },
  {
    path: "/submit",
    element: <Submission></Submission>,
  },
  {
    path: "/profile/:profileid",
    element: <Profile></Profile>,
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
