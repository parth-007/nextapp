const DataCard = async({name}) => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    if (!name || name === "") {
        return <h1>Please enter a name</h1>;
    }
    const data = await fetch(`https://api.genderize.io/?name=${name}`);
    const resp: any = await data.json();
    
    return <div className="border-2 border-gray-300 rounded-md p-4">
        <h1>Gender: {resp.gender}</h1>
    </div>;
}

export default DataCard;