import DribbleIconFooter from "../../assets/dribbleFooter.svg"

const Lower = () => {
    return (
        <div className="footer__border">
            <hr className="user-avatar__border" />
            <div className="footer-lower">
                <div>© 2021 Dribbble. All rights reserved.</div>
                <div className="total__shots">
                    <div>
                        <span class="shots-count">16,018,703{" "}
                        </span>
                        <span className="shots-text">shots dribbbled</span>
                        <img className="dribble-ball" src={DribbleIconFooter} alt="Dribble Icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lower;