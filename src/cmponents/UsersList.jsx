import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../store";
import Panel from "./Panel";
import Button from "./Button";
import Skeletion from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import { GoX } from "react-icons/go";
import { useDispatch } from "react-redux";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const dispatch = useDispatch();

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

  // if (loadingUsersError) {
  //   return <Panel>Error fetching data...</Panel>;
  // }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>

        {creatingUserError && "Error creating user..."}
      </div>
      {/* show error message */}
      {loadingUsersError && <Panel>Error fetching data...</Panel>}
      {isLoadingUsers ? (
        <Skeletion times={6} className="h-20 w-full mt-4" />
      ) : (
        <div>
          {data.map((user) => {
            return <UsersListItem user={user} key={user.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default UsersList;
