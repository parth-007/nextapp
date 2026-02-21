const PostPage = async(props) => {
    const p = await props.params;
    console.log(p);
    const {postId} = await props.params;
    console.log(postId);
    return <h1>Post Page {postId} User: {p.username}</h1>
}

export default PostPage;