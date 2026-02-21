import { Suspense } from "react";
import DataCard from "./DataCard";

const ServerComponent = async (props) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const { name } = await props.searchParams;
  if (!name || name === "") {
    return <h1>Please enter a name</h1>;
  }

  return (
    <>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
          accusamus sunt fugiat nostrum ab fugit amet laudantium, illo quo optio
          labore tenetur esse fuga aperiam quibusdam asperiores quaerat nesciunt
          facilis.
        </p>
      </div>
      {/* <Suspense
        fallback={
          <div className="border-2 border-gray-300 rounded-md p-4">
            <h1>Data Card loading</h1>
          </div>
        }
      > */}
        <DataCard name={name} />
      {/* </Suspense> */}
    </>
  );
};

export default ServerComponent;
