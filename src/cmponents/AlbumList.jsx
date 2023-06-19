import { useFetchAlbumsQuery } from "../store";
import Skeletion from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const Albumslist = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

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
      <div>abums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
};

export default Albumslist;
