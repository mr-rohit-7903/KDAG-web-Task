import data from "./assets/data.json"; // Ensure the correct path

const Home = () => {
    const posts = data.posts;

    return (
        <div>
            {posts.map((post, index) => (
                <div className="page">
                    <div className="row" key={index}>
                        <div className="post">
                            <div className="postHead">
                                <h2>{post.name}</h2>
                                <p>{post.date_and_time}</p>
                            </div>
                            <p className="postContent">{post.post}</p>
                            <p>Likes: {post.likes}</p>
                            <p>Comments: {post.no_of_comments}</p>
                        </div>
                        {post.comments && post.comments.length > 0 && (
                            <div className="comments">
                                <h3>Comments:</h3>
                                {post.comments.map((comment, cIndex) => (
                                    <div key={cIndex}>
                                        <p><strong>{comment.commenter_name}</strong></p>
                                        <p>{comment.date_and_time}</p>
                                        <p>{comment.comment}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        )}
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
