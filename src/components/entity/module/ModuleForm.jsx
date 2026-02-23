import { useState } from "react";
import Action from "../../UI/Actions";
import Spacer from "../../UI/Spacer";
import "./ModuleForm.scss";

const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL:
        "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg",
};

const ModuleForm = ({onCancel}) => {
    const conformance = {
        js2html: {
            ModuleName: (value) => (value === null) ? "" : value,
            ModuleCode: (value) => (value === null) ? "" : value,
            ModuleLevel: (value) => (value === null) ? "0" : value,
            ModuleYearID: (value) => (value === null) ? "0" : value,
            ModuleLeaderID: (value) => (value === null) ? "0" : value,
            ModuleImageURL: (value) => (value === null) ? "" : value,
        },
        html2js: {
            ModuleName: (value) => (value === "" ? null : value),
            ModuleCode: (value) => (value === "" ? null : value),
            ModuleLevel: (value) => (value === "0" ? null : parseInt(value)),
            ModuleYearID: (value) => (value === "0" ? null : parseInt(value)),
            ModuleLeaderID: (value) => (value === "0" ? null : parseInt(value)),
            ModuleImageURL: (value) => (value === "" ? null : value),
        }
    }

    const [module, setModule] = useState(initialModule);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setModule({ ...module, [name]: conformance.html2js[name](value) });
    };

    const handleSubmit = () => alert(JSON.stringify(module));

    return (
        <div className="moduleForm">
            <Spacer>
                <div className="FormTray">
                    <label>
                        Module Name
                        <input type="text" name="ModuleName" value={conformance.js2html.ModuleName(module.ModuleName)} onChange={handleChange} />
                    </label>

                    <label>
                        Module Code
                        <input type="text" name="ModuleCode" value={conformance.js2html.ModuleCode(module.ModuleCode)} onChange={handleChange} />
                    </label>

                    <label>
                        Module Level
                        <select name="ModuleLevel" value={conformance.js2html.ModuleLevel(module.ModuleLevel)} onChange={handleChange}>
                            <option value="0" hidden>No level selected</option>
                            {[3, 4, 5, 6, 7].map((level) => <option key={level}>{level}</option>)}
                        </select>
                    </label>

                    <label>
                        Module Year
                        <input type="text" name="ModuleYearID" value={conformance.js2html.ModuleYearID(module.ModuleYearID)} onChange={handleChange} />
                    </label>

                    <label>
                        Module Leader
                        <input type="text" name="ModuleLeaderID" value={conformance.js2html.ModuleLeaderID(module.ModuleLeaderID)} onChange={handleChange} />
                    </label>

                    <label>
                        Module Image
                        <input type="text" name="ModuleImageURL" value={conformance.js2html.ModuleImageURL(module.ModuleImageURL)} onChange={handleChange} />
                    </label>
                </div>

                <Action.Tray>
                    <Action.Submit showText onClick={handleSubmit} />
                    <Action.Cancel showText buttonText="Cancel form" onClick={onCancel} />
                </Action.Tray>
            </Spacer>
        </div>
    );
};

export default ModuleForm;
