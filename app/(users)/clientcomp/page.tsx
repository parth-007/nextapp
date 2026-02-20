"use client";

import { useEffect, useState } from "react";
import {Counter} from "./Counter";


const ClientComponent = () => {

    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);
  return (
    <>
      <header>Client Component</header>
      <button
        className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
        onClick={() => alert("Hello")}
      >
        Click me
      </button>
      <Counter />
        <ul className="grid grid-cols-3 gap-5">
            <li>ID</li>
            <li>Title</li>
            <li>Body</li>
            {data.map(d => (<li key={d.id}>{d.title}</li>))}
        </ul>
    </>
  );
};

export default ClientComponent;
