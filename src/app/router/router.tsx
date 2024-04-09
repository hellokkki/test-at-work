import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Homepage, UserProfilePage } from "../pages/index";
import { Layout } from "./Layout";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="user/:userId" element={<UserProfilePage />} />
    </Route>
  )
);
