import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card";
import "./Modules.scss";

function Modules() {
    const [modules, setModules] = useState(null);

    const apiURL = "https://softwarehub.uk/unibase/api/modules";

    const apiGet = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();
        setModules(result);
    };

    useEffect(() => {
        apiGet(apiURL);
    }, [apiURL]);

    return (
        <>
            <h1>Modules</h1>
            {!modules ? <p>Loading records...</p> : (
                <>
                    <CardContainer>
                        {modules.map((module) => (
                            <div className="moduleCard" key={module.ModuleID}>
                                <Card>
                                    <p>{module.ModuleCode}</p>
                                    <p>{module.ModuleName}</p>
                                    <img src={module.ModuleImageURL} alt={module.ModuleName} />
                                </Card>
                            </div>
                        ))}
                    </CardContainer>
                </>
            )}
        </>
    );
}

export default Modules;
