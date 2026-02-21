const ServerComponent = async(props) => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const {name} = await props.searchParams
    if (!name || name === "") {
        return <h1>Please enter a name</h1>;
    }
    const data = await fetch(`https://api.genderize.io/?name=${name}`);
    const resp: any = await data.json();
    
    return <h1>Gender: {resp.gender}</h1>;
};

export default ServerComponent;