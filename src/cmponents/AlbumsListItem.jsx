import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";
import PhotosList from "./photosList";

const AlbumListItem = ({ album }) => {
  const [deleteAlbum, results] = useDeleteAlbumMutation();

  const header = (
    <div className="flex flex-row justify-between items-center">
      <Button
        loading={results.isLoading}
        onClick={() => deleteAlbum(album)}
        className="mr-3"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
};

export default AlbumListItem;
