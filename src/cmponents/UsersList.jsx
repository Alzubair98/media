import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Panel from "./Panel";
import Button from "./Button";
import Skeletion from "./Skeleton";

const UsersList = () => {
  // loading
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);

  // user creation
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  const handleUserAdd = () => {
    setIsCreatingUser(true);
    dispatch(addUser())
      .unwrap()
      .catch((err) => setCreatingUserError(err))
      .finally(() => setIsCreatingUser(false));
  };

  useEffect(() => {
    setIsLoadingUsers(true);
    dispatch(fetchUsers())
      .unwrap() // unwrap() will give us a promise

      .catch((err) => {
        setLoadingUsersError(err);
      })
      .finally(() => {
        // will be called whatever happens
        setIsLoadingUsers(false);
      });
  }, [dispatch]);

  if (isLoadingUsers) {
    return <Skeletion times={6} className="h-20 w-full mt-4" />;
  }

  if (loadingUsersError) {
    return <Panel>Error fetching data...</Panel>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User ..."
        ) : (
          <Button onClick={handleUserAdd} primary>
            + Add User
          </Button>
        )}
        {creatingUserError && "Error creating user..."}
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
