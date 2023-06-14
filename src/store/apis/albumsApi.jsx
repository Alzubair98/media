import { createApi, fetchBaseQuery } from "@redxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
});
