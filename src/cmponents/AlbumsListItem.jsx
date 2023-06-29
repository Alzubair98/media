import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

const AlbumListItem = ({ album }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const header = (
    <div className="flex flex-row justify-between items-center">
      <Button
        loading={results.isLoading}
        onClick={() => deleteAlbum(album.id)}
        className="mr-3"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel header={header}>
      list of photos in the album
    </ExpandablePanel>
  );
};

export default AlbumListItem;
