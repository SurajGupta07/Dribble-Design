import userIcon from "../assets/user.jpg"
import UserPosts from "./UserPosts";

const UserProfile = () => {
    return (
        <div className="user-details-section">
            <div className="user-avatar-container">
                <span className="user-avatar-line"></span>
                <div className="user__avatar-container">
                    <img className="user-icon user__details--icon" src={userIcon} alt="UserIcon"/>
                </div>
                <span className="user-avatar-line"></span>
            </div>
            <div className="user__intro">
                <h1 className="header-title user__title">Francesco Zagami</h1>
                <p className="header-name user-bio">Lead Designer at Isobar - Judge @Awwwards</p>
            </div>
            <UserPosts />
        </div>
    )
}

export default UserProfile;