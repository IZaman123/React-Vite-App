import Action from "../../UI/Actions";
import "./ModuleForm.scss";

const ModuleForm = ({onCancel}) => {
    return (
        <div className="moduleForm">
            <p>This is the form!</p>
            <Action.Tray>
                <Action.Cancel showText buttonText="Cancel form" onClick={onCancel} />
            </Action.Tray>
        </div>
    );
};

export default ModuleForm;
