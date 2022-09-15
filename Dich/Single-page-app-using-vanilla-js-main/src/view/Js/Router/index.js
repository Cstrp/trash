import Dashboard from "../Views/Dashboard";
import Posts from "../Views/Posts";
import PostView from "../Views/PostView";
import Settings from "../Views/Settings";

const routes = [
  /* Put your routes here */
  {path: "/", view: Dashboard},
  {path: "/posts", view: Posts},
  {path: "/posts/:id", view: PostView},
  {path: "/settings", view: Settings}
]

export default routes;
