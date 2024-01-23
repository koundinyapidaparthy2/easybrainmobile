import { lazy } from "react";
const Home = lazy(() => import("../components/Home"));
const Sprinters = lazy(() => import("../components/Sprinters"));
const Connect = lazy(() => import("../components/Connect"));
const Post = lazy(() => import("../components/Post"));
const Courses = lazy(() => import("../components/Courses"));
const SignIn = lazy(() => import("../components/Signin"));

export const RouteList = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/sprinters",
    component: Sprinters,
  },
  {
    exact: true,
    path: "/connect",
    component: Connect,
  },
  {
    exact: true,
    path: "/signin",
    component: SignIn,
  },
  {
    exact: true,
    path: "/post",
    component: Post,
  },
  {
    exact: true,
    path: "/courses",
    component: Courses,
  },
];
