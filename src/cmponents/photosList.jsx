import PhotosListItems from "./photosListItem";
import { useFetchPhotosQuery } from "../store";

const PhotosList = ({ album }) => {
  useFetchPhotosQuery(album);

  return "photo list";
};

export default PhotosList;
