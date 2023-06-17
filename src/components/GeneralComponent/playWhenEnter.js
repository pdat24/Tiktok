function playWhenEnter({ parent, video }) {
    parent.onmouseenter = () => video.play();
    parent.onmouseleave = () => {
        video.pause();
        video.currentTime = 0;
    };
}

export default playWhenEnter;
