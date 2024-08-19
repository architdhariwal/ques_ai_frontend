import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/ProjectsPage";
import AllProjects from "./components/AllProjects";
import ProjectNavigation from "./components/ProjectNavigation";
import AuthPage from "./pages/AuthPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EditEpisode from "./components/EditEpisode";
import AccountSettings from "./components/AccountSetting"; // Corrected import
import ComingSoon from "./components/ComingSoon";
import MyContextProvider from "./hooks/MyContextProvider";
import Error from "./pages/Error"; // Added Error component import
import AddPodCast from "./pages/AddPodcast";

function App() {
  const route = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'signup', element: <Signup /> },
      ],
    },
    {
      path: '/',
      element: <Navigation />,
      errorElement: <Error />, // Error handling element
      children: [
        { path: '', element: <HomePage /> },
        {
          path: 'projects',
          element: <ProjectsPage />,
          children: [
            { path: '', element: <AllProjects /> },
          ],
        },
      ],
    },
    {
      path: "/projects/:id",
      element: <ProjectNavigation />,
      children: [
        { path: '', element: <AddPodCast /> },
        { path: 'edit/:episodeId', element: <EditEpisode /> },
        { path: 'account', element: <AccountSettings /> },
        { path: 'deployment', element: <ComingSoon /> },
        { path: 'widget-config', element: <ComingSoon /> },
        { path: 'upgrade', element: <ComingSoon /> },
      ],
    },
  ]);

  return (
    <MyContextProvider>
      <RouterProvider router={route} />
    </MyContextProvider>
  );
}

export default App;