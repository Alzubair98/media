import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Panel from "./Panel";
import Button from "./Button";
import Skeletion from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";

const UsersList = () => {
  // loading
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  // user creation
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  const handleUserAdd = () => {
    doAddUser();
  };

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  // if (isLoadingUsers) {
  //   return <Skeletion times={6} className="h-20 w-full mt-4" />;
  // }

  if (loadingUsersError) {
    return <Panel>Error fetching data...</Panel>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd} primary>
          + Add User
        </Button>

        {creatingUserError && "Error creating user..."}
      </div>
      {isLoadingUsers ? (
        <Skeletion times={6} className="h-20 w-full mt-4" />
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default UsersList;
