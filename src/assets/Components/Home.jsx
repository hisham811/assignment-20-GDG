import "../Styles/Home.css"
import image from "../home.jpg"
const Home = () => {

    return(
        <div className="home-container">
            <div className="container">
                <h1>Welcome to Our Website</h1>
                <p>This website displays users information</p>
                <img src={image} alt="" />
            </div>
        </div>
    )
}
export default Home