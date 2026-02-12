import { useState, useEffect } from "react";
import { CardContainer } from "../UI/Card";
import ModuleCard from "../entity/module/ModuleCard";

function Modules() {
    const [modules, setModules] = useState(null);

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

    return (
        <>
            <h1>Modules</h1>
            {!modules ? <p>Loading records...</p> : (
                <CardContainer>
                    {modules.map((module) => <ModuleCard key={module.ModuleID} module={module} />)}
                </CardContainer>
            )}
        </>
    );
}

export default Modules;
