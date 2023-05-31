function handleOpen({ container, dialog }) {
    container.style.display = "flex";
    dialog.style.display = "block";
    setTimeout(() => {
        dialog.style.opacity = "1";
        container.style.opacity = "1";
        dialog.style.transform = "translateY(0)";
    });
}

export default handleOpen;
