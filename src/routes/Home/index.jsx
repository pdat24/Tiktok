import { useParams } from "react-router-dom";
import ExplorePage from "../../pages/explore";
import FollowPage from "../../pages/following";
import Feedback from "../../pages/feedBack";
import LivePage from "../../pages/live";
import VideoFullPage from "../../pages/videoFull";
import PageNotFound from "../../pages/pageNotFound";
import { DefaultLayout, NoneLayout, OnlyHeader } from "../../components/layout";

function HomePageRouter() {
    const { homePageParam } = useParams();
    let Layout = DefaultLayout;
    let Page = null;
    switch (homePageParam) {
        case "explore":
            Page = ExplorePage;
            break;
        case "following":
            Page = FollowPage;
            break;
        case "live":
            Page = LivePage;
            break;
        case "feedBack":
            Layout = OnlyHeader;
            Page = Feedback;
            break;
        case "videoFull":
            Layout = NoneLayout;
            Page = VideoFullPage;
            break;
        default:
            Layout = NoneLayout;
            Page = PageNotFound;
    }
    return (
        <Layout>
            <Page />
        </Layout>
    );
}

export default HomePageRouter;
