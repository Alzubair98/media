import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isDeletingUser, error] = useThunk(deleteUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            className="mr-4"
            loading={isDeletingUser}
            onClick={handleClick}
          >
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user.</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
};

export default UsersListItem;
