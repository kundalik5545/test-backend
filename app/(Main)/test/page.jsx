"use client";

import { createUser, getUser } from "@/action/user";
import React, { useState, useEffect } from "react";

const TestPage = () => {
  const [users, setUsers] = useState([]);

  const handleAddUser = async () => {
    try {
      const user = await createUser();
      console.log("User created:", user);
      fetchUsers(); // refresh list after adding
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUsers = async () => {
    try {
      const allUsers = await getUser();
      setUsers(allUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={handleAddUser}>Add User</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default TestPage;
