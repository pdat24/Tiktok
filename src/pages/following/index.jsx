import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { videoInFollowingPage } from "../../components/GlobalVar";
import { Avatar, GeneralButton } from "../../components/GeneralComponent";
import scss from "./following.module.scss";
import playWhenEnter from "../../components/GeneralComponent/playWhenEnter";

function FollowPage() {
    const ChildElement = ({ item }) => {
        const itemWrapperDiv = useRef();
        const videDiv = useRef();
        const textStyle = clsx("text-ellipsis", "overflow-hidden", "w-full", "whitespace-nowrap", "text-center");
        useEffect(() => {
            videDiv.current.muted = true;
            playWhenEnter({ parent: itemWrapperDiv.current, video: videDiv.current });
        }, []);
        return (
            <Link to="/" ref={itemWrapperDiv} className={scss.videoItems}>
                <video
                    ref={videDiv}
                    loading="lazy"
                    className="rounded-lg object-cover h-full"
                    width="256px"
                    src={item.video}
                ></video>

                <div className={scss.infoDiv}>
                    <Avatar src={item.avatar} wh="48px" className="mb-3.5" />
                    <h5 css={textStyle} className={clsx("text-base font-bold", textStyle)}>
                        {item.userName}
                    </h5>
                    <h6 css={textStyle} className={clsx("text-sm", textStyle)}>
                        {item.accountName}
                    </h6>
                    <GeneralButton className={clsx(scss.followBtnStyle, "hover:brightness", "mt-2")}>
                        Follow
                    </GeneralButton>
                </div>
            </Link>
        );
    };
    return (
        <div className={scss.wrapperStyle}>
            {videoInFollowingPage.map((item, index) => {
                return <ChildElement key={index} item={item} />;
            })}
        </div>
    );
}

export default FollowPage;
