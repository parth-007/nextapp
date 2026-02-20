const ServerComponent = async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const resp: any[] = await data.json();
  return (
    <>
      <h1>Server Component</h1>
      <ul className="grid grid-cols-3 gap-5">
        <li>ID</li>
        <li>Title</li>
        <li>Body</li>
        {resp.map((d) => (
          <li key={d.id}>{d.title}</li>
        ))}
      </ul>
    </>
  );
};

export default ServerComponent;
