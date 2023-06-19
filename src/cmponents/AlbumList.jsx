import { useFetchAlbumsQuery } from "../store";

const Albumslist = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  console.log(data);
  return <div> Albums for {user.name}</div>;
};

export default Albumslist;
