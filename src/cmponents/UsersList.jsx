import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skeletion from "./Skeleton";

const UsersList = () => {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeletion times={6} className="h-20 w-full mt-4" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return <div>{data.length}</div>;
};

export default UsersList;
