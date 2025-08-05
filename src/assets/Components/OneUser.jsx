import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "../Styles/OneUser.css"

const OneUser = () => {
    const [User,SetUser] = useState([])
    const [Loading,SetLoading] = useState(true)
    const {id} = useParams()
    useEffect(()=>{
        const FetchUser = async() => {
            let Res = await fetch(`https://dummyjson.com/users/${id}`)
            let Data = await Res.json()
            SetUser(Data)
            SetLoading(false)
        }
        FetchUser()
    })
    if(!Loading){
        return(
            <div className="oneUser">
                <div className="content">
                    <img src={User.image} alt={User.firstName} />
                    <h1>{User.firstName} {User.lastName}</h1>
                    <p>Gender: {User.gender}</p>
                    <p>Email: {User.email}</p>
                    <p>Phone: {User.phone}</p>
                    <Link to={"/Users"} className="link">Back</Link>
                </div>
            </div>
        )
    }

}
export default OneUser