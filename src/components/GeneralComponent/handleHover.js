function handleHover({ parent, target, startTime, endTime }) {
    let TimeID;
    parent.onmouseenter = () => {
        clearTimeout(TimeID);
        TimeID = setTimeout(() => {
            target.style.display = "block";
            target.style.opacity = "1";
        }, startTime);
    };
    parent.onmouseleave = () => {
        clearTimeout(TimeID);
        TimeID = setTimeout(() => {
            target.style.opacity = "0";
            setTimeout(() => {
                target.style.display = "none";
            }, 200);
        }, endTime);
    };
}

export default handleHover;
