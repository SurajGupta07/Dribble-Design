import Video from "../assets/banner.mp4"

const Posts = () => {
    return (
        <div className="posts__container">
            <video style={{borderRadius: '10px'}} width="835" height="623" autoPlay muted>
                <source src={Video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default Posts;