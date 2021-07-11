import {Link} from 'react-router-dom';
import PostOne from "../assets/postOne.mp4"
import PostTwo from "../assets/postTwo.jpg"
import PostThree from "../assets/postThree.jpg"
import PostFour from "../assets/postFour.jpg"

const UserPosts = () => {
    return (
        <div className="user_posts--section">
            <div className="user-posts--heading">
                <h4 className="user__name">More by Francesco Zagami</h4>
                    <Link to="/" className="view__profile">View Profile</Link>
            </div>
            <div className="posts__container">
                <video className="user__posts"
                    autoPlay
                    muted>
                    <source src={PostOne} type="video/mp4"/>
                </video>
                <img className="user__posts" src={PostTwo} alt="Post Two" />
                <img className="user__posts" src={PostThree} alt="Post Thre" />
                <img className="user__posts" src={PostFour} alt="Post Four" />
            </div>
        </div>
    )
}

export default UserPosts;