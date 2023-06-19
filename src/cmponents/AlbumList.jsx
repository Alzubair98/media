import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeletion from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const Albumslist = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

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
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          list of photos in the album
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-2">
        abums for {user.name}{" "}
        <Button onClick={handeAddAlbum}>+ Add Album</Button>
      </div>
      <div>{content} </div>
    </div>
  );
};

export default Albumslist;
