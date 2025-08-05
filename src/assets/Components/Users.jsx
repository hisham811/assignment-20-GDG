import GetUsers from "./GetUsers";
import "../Styles/Users.css";
import { Link } from "react-router-dom";

const Users = () => {
    let myUsers = GetUsers();
    return (
        <>
        <h1 className="title">Users List</h1>
        <div className="allUsers">
        {myUsers.map((user) => (
            <div key={user.id} className="user">
                <img src={user.image} alt={user.id} />
                <h2>{user.firstName} {user.lastName}</h2>
                <Link to={`/${user.id}`} className="info-link">Info</Link>
            </div>
            ))}
        </div>
        </>
    );
};

export default Users;
