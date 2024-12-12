import React, { useState, useEffect } from "react";
import axios from "axios";
import type { User, UserData } from "./UsersList.types";
import Table from "../Table";
import TableSkeleton from "../TableSkeleton";
import { toast } from "sonner";
import { UsersListContext } from "./usersListContext";
import { Box, Paper } from "@mui/material";

// const API_URL = "https://jsonplaceholder.typicode.com/usersx"; // Use this for error
const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get<User[]>(API_URL);
      setUsers(data);
      setIsLoading(false);
    } catch {
      toast.error("Unable to fetch Users. Please refresh the page.");
    }
  };

  const handleDeleteUsers = () => {
    if (confirm("Are you sure?")) {
      setUsers(users.filter((user) => !selected.includes(user.id)));
    }
    setSelected([]);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(fetchUsers, 1500);
  }, []);

  return (
    <UsersListContext.Provider value={{ handleDeleteUsers, selected, setSelected }}>
      <Box sx={{ width: "100%", maxWidth: "1400px", margin: "100px auto", padding: "0 20px", boxSizing: "border-box" }}>
        <Paper elevation={6} sx={{ borderRadius: "8px" }}>
          {isLoading ? <TableSkeleton /> : <Table data={createData(users)} />}
        </Paper>
      </Box>
    </UsersListContext.Provider>
  );
};

export default UserList;

const createData = (users: User[]): UserData[] => {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    cityName: user.address.city,
    phone: user.phone,
    website: user.website,
    companyName: user.company.name,
  }));
};
