import { Card } from "../../UI/Card";
import "./UserCard.scss";

const UserCard = ({ user }) => {
    return (
        <div className="studentCard">
            <Card>
                <p>{user.UserEmail.substring(0, 8)}</p>
                <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
                <img
                    src={user.UserImageURL}
                    alt={user.UserEmail.substring(0, 8)}
                />
            </Card>
        </div>
    );
};

export default UserCard;
