import { useEffect, useState } from "react";

const GetUsers = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("https://dummyjson.com/users");
            let data = await res.json();
            setUsers(data.users);
        };
        fetchData();
    }, []);

    return Users;
};

export default GetUsers;