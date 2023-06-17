function handleHover({ parent, target, startTime, endTime, initialDisplay }) {
    let TimeID;
    parent.onmouseenter = () => {
        clearTimeout(TimeID);
        TimeID = setTimeout(() => {
            target.style.display = initialDisplay || "block";
            target.style.opacity = "1";
        }, startTime || 10);
    };
    parent.onmouseleave = () => {
        clearTimeout(TimeID);
        TimeID = setTimeout(() => {
            target.style.opacity = "0";
            setTimeout(() => {
                target.style.display = "none";
            }, 200);
        }, endTime || 10);
    };
}

export default handleHover;
