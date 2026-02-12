import { useState, useEffect } from "react";
import { CardContainer } from "../UI/Card";
import ModuleCard from "../entity/module/ModuleCard";
import ModuleForm from "../entity/module/ModuleForm";
import Action from "../UI/Actions";
import Spacer from "../UI/Spacer";

function Modules() {
    const [modules, setModules] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const loggedInUserGroup = 820;
    const apiURL = "https://softwarehub.uk/unibase/api";
    const myModulesEndpoint = `${apiURL}/modules/leader/${loggedInUserGroup}`;

    const apiGET = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();
        setModules(result);
    };

    useEffect(() => {
        apiGET(myModulesEndpoint);
    }, [myModulesEndpoint]);

    const handleAdd = () => {
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <>
            <h1>Modules</h1>

            <Spacer>
                {!showForm ? (
                    <Action.Tray>
                        <Action.Add showText buttonText="Add new module" onClick={handleAdd} />
                    </Action.Tray>
                ) : (
                    <ModuleForm onCancel={handleCancel} />
                )}

                {!modules ? <p>Loading records...</p> : (
                    <CardContainer>
                        {modules.map((module) => <ModuleCard key={module.ModuleID} module={module} />)}
                    </CardContainer>
                )}
            </Spacer>
        </>
    );
}

export default Modules;
