function handleScrollTop({target, trigger}) {
    const handler = () => {
        if (target.scrollTop > 0) {
            trigger.style.bottom = "20px";
        } else {
            trigger.style.bottom = "-32px";
        }
    };
    target.onscroll = handler;
    return () => target?.removeEventListener("scroll", handler);
}

export default handleScrollTop
