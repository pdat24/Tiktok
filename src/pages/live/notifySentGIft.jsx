import { Avatar } from "../../components/GeneralComponent";
function NotifySentGift({ avatar, accountName, giftName, giftImg, count }) {
    return (
        <div>
            <div>
                <Avatar src={avatar} />
                <div>
                    <div>{accountName}</div>
                    <div>{"Đã tặng " + giftName}</div>
                </div>
            </div>
            <div>
                <img alt="git image" src={giftImg} />
                <div>x {count}</div>
            </div>
        </div>
    );
}

export default NotifySentGift;
