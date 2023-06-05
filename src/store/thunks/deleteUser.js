import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async () => {
  const response = await axios.delete("http://localhost:3005/users", {});

  return response.data;
});

export { deleteUser };
