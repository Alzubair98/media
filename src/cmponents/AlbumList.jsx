import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from "../store";
import Skeletion from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

const Albumslist = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  const [deleteAlbum, result] = useDeleteAlbumMutation();

  console.log(result);

  const handeAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeletion times={3} className="h-10 w-full mt-2" />;
  } else if (error) {
    content = <div> Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = (
        <div className="flex flex-row justify-between items-center">
          <Button onClick={() => deleteAlbum(album.id)} className="mr-3">
            <GoTrashcan />
          </Button>
          {album.title}
        </div>
      );
      return (
        <ExpandablePanel key={album.id} header={header}>
          list of photos in the album
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className=" m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">albums for {user.name} </h3>
        <Button loading={results.isLoading} onClick={handeAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content} </div>
    </div>
  );
};

export default Albumslist;
