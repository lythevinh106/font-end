import HeaderOnly from "../component/Layout/HeaderOnly";
import routes from "../config/routes";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";

export const publicRoutes = [
  {
    path: routes.home,
    component: Home,
  },

  {
    path: routes.following,
    component: Following,
  },
  {
    path: routes.profile,
    component: Profile,
  },
  {
    path: routes.live,
    component: live,
  },

  {
    path: routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
];
export const privateRoutes = [];
