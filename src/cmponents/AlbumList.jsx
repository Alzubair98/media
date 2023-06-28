import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeletion from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const Albumslist = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  const [addAlbum, results] = useAddAlbumMutation();

  console.log(results.status);
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

  // to add spiner to add album button
  let check;
  if (results.status === "pending") {
    check = true;
  } else {
    check = false;
  }

  return (
    <div>
      <div className=" m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">albums for {user.name} </h3>
        <Button loading={check} onClick={handeAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content} </div>
    </div>
  );
};

export default Albumslist;
