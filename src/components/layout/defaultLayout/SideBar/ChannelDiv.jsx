/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";

import { Introduce, Channel, SidebarTitle, Block } from "../../../SidebarComponent";
import { GeneralButton, Avatar } from "../../../GeneralComponent";
import { channels } from "../../../GlobalVar";
import plaeholderImg from "../../../../assets/imgs/placeholder.jpeg";

function ChannelBlock({ onToggleProfile, id, img, url, name, desc, profile, like = 524721839, follower = 9238149 }) {
    const channel = useRef();
    const [coordinate, setCoordinate] = useState(0);
    return (
        <li
            className="relative"
            onMouseEnter={() => {
                setCoordinate(parseFloat(channel.current.getBoundingClientRect().top) + 48);
                onToggleProfile(id);
            }}
            onMouseLeave={() => onToggleProfile("")}
        >
            <Channel ref={channel} img={img} url={url} name={name} desc={desc} />
            <Introduce
                coordinate={coordinate}
                className="fixed"
                hidden={profile !== id}
                url={url}
                name={name}
                desc={desc}
                follower={follower}
                like={like}
            >
                <Avatar src={img} wh="32px" alt="avatar" />
                <GeneralButton>Follow</GeneralButton>
            </Introduce>
        </li>
    );
}

function ChannelDiv() {
    const [hidden, setHidden] = useState(true);
    const [profile, setProfile] = useState("");
    const timerID = useRef();
    useEffect(() => {
        document.getElementById("sidebarWrapper").onscroll = () => setProfile("");
    }, []);
    const renderMore = () => {
        const res = [];
        channels.forEach((elem) =>
            res.push(<ChannelBlock key={elem.id} {...elem} onToggleProfile={handleToggleProfile} profile={profile} />)
        );
        for (let i = 0; i < 20; ++i) {
            res.push(
                <ChannelBlock
                    key={i}
                    profile={profile}
                    img={plaeholderImg}
                    url="/"
                    id={i}
                    name="vtvcab.tintuc"
                    desc="VTVcab Tin tức"
                    onToggleProfile={handleToggleProfile}
                />
            );
        }
        return res;
    };
    const handleToggleProfile = (value) => {
        clearTimeout(timerID.current);
        timerID.current = setTimeout(() => {
            setProfile(value);
        }, 1000);
    };
    const renderSome = () => {
        return channels.map((elem) => (
            <ChannelBlock key={elem.id} {...elem} onToggleProfile={handleToggleProfile} profile={profile} />
        ));
    };
    return (
        <Block className="py-4" onScroll={() => alert("worked")}>
            <SidebarTitle>Tài khoản được đề xuất</SidebarTitle>
            <div>
                <ul>{hidden ? renderSome() : renderMore()}</ul>
                <span
                    onClick={() => setHidden(!hidden)}
                    className="font-semibold px-2 mt-2 color-primary text-sm cursor-pointer inline-block"
                >
                    {hidden ? "Xem tất cả" : "Ẩn bớt"}
                </span>
            </div>
        </Block>
    );
}

export default ChannelDiv;
