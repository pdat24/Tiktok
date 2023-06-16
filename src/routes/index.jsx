import HomePage from "../pages/home";
import LivePage from "../pages/live";
import FollowPage from "../pages/following";
import ExplorePage from "../pages/explore";
import VideoFullPage from "../pages/videoFull";
import Feedback from "../pages/feedBack";
import { NoneLayout, OnlyHeader } from "../components/layout";

const publicRoute = [
    { path: "/", component: HomePage },
    { path: "/following", component: FollowPage },
    { path: "/explore", component: ExplorePage },
    { path: "/live", component: LivePage },
    { path: "/feedback", component: Feedback, layout: OnlyHeader },
    { path: "/videoFull", component: VideoFullPage, layout: NoneLayout },
];

export { publicRoute };
