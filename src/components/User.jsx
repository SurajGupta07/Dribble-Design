import userIcon from "../assets/user.jpg"

const User = () => {
    return (
        <div className="user__modal">
            <div className="user__content-header">
                <div className="user-content">
                    <div className="user-avatar user__shot-container">
                        <img className="user-icon" src={userIcon} alt="icon"/>
                        <div className="header-details">
                            <h1 className="header-title">Hero Banner - Product Carousel</h1>
                            <p className="header-name">Francesco Zagami • Follow</p>
                        </div>
                    </div>
                    <div className="header__actions">
                        <ul className="user__actions">
                            <div className="user__action--item button__normal space__between">
                                <li className="button__text add__spacing">
                                    <strong>Save</strong>
                                </li>
                            </div>
                            <div className="user__action--item button__normal--like">
                                <li className="button__text">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        enable-background="new 0 0 24 24"
                                        viewBox="0 0 24 24"
                                        role="img"
                                        class="icon ">
                                        <path
                                            d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>
                                    </svg>
                                    <strong>Like</strong>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;