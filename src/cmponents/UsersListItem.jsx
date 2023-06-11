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
        <Button loading={isDeletingUser} onClick={handleClick}>
          <GoTrashcan />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
      </div>
    </div>
  );
};

export default UsersListItem;
