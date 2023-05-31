import scss from "../layout/components/Models/Modals.module.scss";

function Platform({ icon, name, onClick, children }) {
    return (
        <li>
            <div onClick={onClick ? () => onClick(name) : () => {}}>
                <div className={scss["platform"]}>
                    <span className={scss["loginModal__icon"]}>{icon}</span>
                    <span>{children}</span>
                </div>
            </div>
        </li>
    );
}

export default Platform;
