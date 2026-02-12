import { Card } from "../../UI/Card";
import "./ModuleCard.scss";

const ModuleCard = ({ module }) => {
    return (
        <div className="moduleCard">
            <Card>
                <p>{module.ModuleCode}</p>
                <p>{module.ModuleName}</p>
                <img src={module.ModuleImageURL} alt={module.ModuleName} />
            </Card>
        </div>
    );
};

export default ModuleCard;
