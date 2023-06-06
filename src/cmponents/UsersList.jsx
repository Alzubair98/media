import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeletion from "./Skeleton";

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  const handleUserAdd = () => {
    dispatch(addUser());
  };

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoadingUsers) {
    return <Skeletion times={6} className="h-20 w-full mt-4" />;
  }

  if (loadingUsersError) {
    return <div>Error fetching data...</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd} primary>
          + Add User
        </Button>
      </div>
      {data.map((user) => {
        return (
          <div key={user.id} className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
              {user.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
