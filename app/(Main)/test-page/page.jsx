import { getUser } from "@/action/user";
import React from "react";

const TestPages = async () => {
  const allUsers = await getUser();
  return (
    <div>
      <h1>Test Pages all</h1>
      <pre>{JSON.stringify(allUsers, null, 2)}</pre>
    </div>
  );
};

export default TestPages;
