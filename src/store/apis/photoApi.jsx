import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const PhotosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchPhotos: builder.query({
        query: (album) => {
          return {
            url: "/photos",
            params: {
              albumId: album.id,
            },
            method: "GET",
          };
        },
      }),
      addPhoto: builder.mutation({}),
      removePhoto: builder.mutation({}),
    };
  },
});

export const { useFetchPhotosQuery } = PhotosApi;
export { PhotosApi };
