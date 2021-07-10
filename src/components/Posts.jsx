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
                    lineHeight: "32px"
                }}>Hi there,
                    <br/>
                    I'm starting a new project (just for fun as usual). The brand is Bower &
                    Wilkins. In this shot you can find a carousel with smooth transitions.</p>
            </div>
        </div>
    )
}

export default Posts;