import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeletion from "./Skeleton";
import Button from "./Button";

import AlbumListItem from "./AlbumsListItem";

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
      return <AlbumListItem key={album.id} album={album} />;
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
