import HomePage from "../pages/home";
import LivePage from "../pages/live";
import FollowPage from "../pages/following";
import ExplorePage from "../pages/explore";

const publicRoute = [
    { path: "/", component: HomePage },
    { path: "/following", component: FollowPage },
    { path: "/explore", component: ExplorePage },
    { path: "/live", component: LivePage },
];

export { publicRoute };
