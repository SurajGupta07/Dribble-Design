import {Link} from 'react-router-dom';
import Video from "../assets/banner.mp4"

const Posts = () => {
    return (
        <div>
            <div className="posts__container">
                <video
                    style={{
                    borderRadius: '10px'
                }}
                    width="835"
                    height="623"
                    autoPlay
                    muted>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <div className="short-description__container">
                <p
                    style={{
                    fontFamily: "'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontSize: "20px",
                    fontWeight: "400",
                    lineHeight: "32px",
                    opacity: 0.8
                }}>Hi there,
                    <br/>
                    I'm starting a new project (just for fun as usual). The brand is
                    <Link to="/" className="bio__link">
                        <span className=""> Bower & Wilkins.</span>
                    </Link>
                    In this shot you can find a carousel with smooth transitions.</p><br />
            </div>
            <div className="short-description__container typography">
                <p><strong>Typography</strong></p>
            </div>
            <p className="short-description__container typography">Press "L" to appreciate it.</p>
        </div>
    )
}

export default Posts;