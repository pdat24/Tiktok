function handleClose({ container, dialog }) {
    dialog.style.transform = "translateY(-52px)";
    dialog.style.opacity = "0";
    container.style.opacity = "0";
    setTimeout(() => {
        dialog.style.display = "none";
        container.style.display = "none";
    }, 300);
}

export default handleClose;
