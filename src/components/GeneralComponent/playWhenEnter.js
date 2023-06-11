function playWhenEnter({ parent, video }) {
    parent.onmouseenter = () => video.play();
    parent.onmouseleave = () => {
        video.currentTime = 0;
        video.pause();
    };
}

export default playWhenEnter;
