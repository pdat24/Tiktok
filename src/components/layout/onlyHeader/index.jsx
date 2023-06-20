import Header from "../components/Header";

function OnlyHeader({ children }) {
    return (
        <div id="main">
            <Header />
            <div className="contents">{children}</div>
        </div>
    );
}

export default OnlyHeader;
