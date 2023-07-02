import PhotosListItems from "./photosListItem";
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <>
      <div className="m-2 flex flex-row justify-between items-center">
        <h3 className="text-lg font-bold">photo In {album.title}</h3>
        <Button loading={results.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </>
  );
};

export default PhotosList;
