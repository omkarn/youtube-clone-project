import { Provider } from "react-redux";
import Header from "./components/Header";
import store from "./app/store";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import WatchPage from "./components/WatchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
