/** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";
import { useState } from "react";

import { Channel, SidebarTitle, Block } from "../../../SidebarComponent";
import { channels } from "../../../GlobalVar";
import plaeholderImg from "../../../../assets/imgs/placeholder.jpeg";

function ChannelDiv() {
    const [hidden, setHidden] = useState(true);
    const renderMore = () => {
        const res = [];
        channels.forEach((elem) => res.push(<li key={elem.id}>{elem.channel}</li>));
        for (let i = 0; i < 20; ++i) {
            res.push(
                <li key={i}>
                    <Channel img={plaeholderImg} url="/" name="vtvcab.tintuc" desc="VTVcab Tin tức" />
                </li>
            );
        }
        return res;
    };
    const renderSome = () => {
        return channels.map((elem) => <li key={elem.id}>{elem.channel}</li>);
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
