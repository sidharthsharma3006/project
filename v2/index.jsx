import React from "react";
import { Link } from "react-router-dom";
import { folderName } from "./config";


const Page = () => {
  return (
    <div>
      <h1>This is 1.14 page</h1>
      <Link to={`/${folderName}/support`}>Go to Support</Link>; 
    </div>
  );
};

export default Page;
