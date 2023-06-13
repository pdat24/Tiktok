function TextOverflow({ children, className, ...attrs }) {
    return (
        <h3 {...attrs} className={"text-ellipsis overflow-hidden " + className}>
            {children}
        </h3>
    );
}

export default TextOverflow;
