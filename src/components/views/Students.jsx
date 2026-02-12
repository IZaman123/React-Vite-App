import { useState, useEffect } from "react";
import { CardContainer } from "../UI/Card";
import UserCard from "../entity/user/UserCard";

function Students() {
    const newStudent = {
        UserFirstname: "Nathan",
        UserLastname: "Olsson",
        UserEmail: "K9999999@kingston.ac.uk",
        UserRegistered: 0,
        UserLevel: 4,
        UserYearID: 1,
        UserUsertypeID: 2,
        UserImageURL:
            "https://images.generated.photos/eL1-OlKDqGf1IaL_b2O8aSj7osDX_eFVHZEoJ0f3ZV0/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYwNjc0LmpwZw.jpg",
        UserUsertypeName: "Student",
        UserYearName: "2022-23",
    };

    const [students, setStudents] = useState(null);

    const myGroupID = 13;
    const apiURL = "https://softwarehub.uk/unibase/api";
    const myGroupEndpoint = `${apiURL}/users/groups/${myGroupID}`;

    const apiGET = async (endpoint) => {
        const response = await fetch(endpoint);
        const result = await response.json();
        setStudents(result);
    };

    useEffect(() => {
        apiGET(myGroupEndpoint);
    }, [myGroupEndpoint]);

    const handleAdd = (student) => {
        student.UserID = Math.floor(10000 * Math.random());
        setStudents([...students, student]);
        console.log(`Length of students: ${students.length}`);
    };

    return (
        <>
            <h1>Students</h1>
            {!students ? <p>Loading records...</p> : (
                <>
                    <CardContainer>
                        {students.map((student) => <UserCard key={student.UserID} user={student} />)}
                    </CardContainer>
                    <button onClick={() => handleAdd(newStudent)}>Add student</button>
                </>
            )}
        </>
    );
}

export default Students;
