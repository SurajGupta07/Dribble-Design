import { Link } from 'react-router-dom';
import contentIcon from "../assets/hotjar.jpg"

const Hotjar = () => {
    return(
        <div className="main__hotjar add__space">
            <div className="hotajar__content--container">
                <img className="content__icon" src={contentIcon} alt="icon" />
                <div className="hotajar__text--container">
                    <p className="content__text">Create designs that drive conversions with Hotjar.</p>
                    <small className="content__text--link">Don't want to see ads? <Link to="/" className="premium_link">Go Pro!</Link></small>
                    <Link to="/" className="button__link"><span className="link__text">Try now for free</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Hotjar;