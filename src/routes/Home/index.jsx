import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ExplorePage from "../../pages/explore";
import FollowPage from "../../pages/following";
import Feedback from "../../pages/feedBack";
import LivePage from "../../pages/live";
import VideoFullPage from "../../pages/videoFull";
import PageNotFound from "../../pages/pageNotFound";
import { DefaultLayout, OnlyHeader } from "../../components/layout";
import Setting from "../../pages/setting";
import UploadPage from "../../pages/upload";

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
        case "feedback":
            Layout = OnlyHeader;
            Page = Feedback;
            break;
        case "videoFull":
            Layout = Fragment;
            Page = VideoFullPage;
            break;
        case "setting":
            Layout = OnlyHeader;
            Page = Setting;
            break;
        case "upload":
            Layout = OnlyHeader;
            Page = UploadPage;
            break;
        default:
            Layout = Fragment;
            Page = PageNotFound;
    }
    return (
        <Layout>
            <Page />
        </Layout>
    );
}

export default HomePageRouter;
