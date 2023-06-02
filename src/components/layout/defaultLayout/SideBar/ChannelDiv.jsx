/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";

import { Introduce, Channel, SidebarTitle, Block } from "../../../SidebarComponent";
import { channels } from "../../../GlobalVar";
import plaeholderImg from "../../../../assets/imgs/placeholder.jpeg";

function ChannelBlock({ onToggleProfile, id, img, url, name, desc, profile, like = "807.1", follower = "9.2" }) {
    return (
        <li className="relative" onMouseEnter={() => onToggleProfile(id)} onMouseLeave={() => onToggleProfile("")}>
            <Channel img={img} url={url} name={name} desc={desc} />
            <Introduce
                className="absolute"
                hidden={profile !== id}
                img={img}
                url={url}
                name={name}
                desc={desc}
                follower={follower}
                like={like}
            />
        </li>
    );
}

function ChannelDiv() {
    const [hidden, setHidden] = useState(true);
    const [profile, setProfile] = useState("");
    const timerID = useRef();
    const renderMore = () => {
        const res = [];
        channels.forEach((elem) =>
            res.push(<ChannelBlock {...elem} onToggleProfile={handleToggleProfile} profile={profile} />)
        );
        for (let i = 0; i < 20; ++i) {
            res.push(
                <ChannelBlock
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
        }, 800);
    };
    const renderSome = () => {
        return channels.map((elem) => (
            <ChannelBlock key={elem.id} {...elem} onToggleProfile={handleToggleProfile} profile={profile} />
        ));
    };
    return (
        <Block className="py-4">
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
