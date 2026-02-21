"use client";

import { use } from "react";

const ThreadPage = (props) => {
    const p: any = use(props.params);
    console.log(p);

    return <h1>Thread Page {p.threadId} User: {p.username}</h1>
};

export default ThreadPage;