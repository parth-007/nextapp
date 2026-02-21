const UserPage = async(props) => {
    const {username} = await props.params;
    console.log(username);
    return <h1>User Page {username}</h1>
}

export default UserPage;