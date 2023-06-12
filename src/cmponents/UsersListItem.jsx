import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { deleteUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isDeletingUser, error] = useThunk(deleteUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-4" loading={isDeletingUser} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );
  return <ExpandablePanel header={header}>Content!!!</ExpandablePanel>;
};

export default UsersListItem;
