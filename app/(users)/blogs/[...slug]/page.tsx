const Blog = async(props) => {
    const slug = await props.params;
    console.log("slug:", slug); 
    return (<><h1>Blogs</h1></>)
}

export default Blog;