import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./apiUrl";
export const societeApi = createApi({
	reducerPath: "api",
	basePath: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders(headers) {
			headers.set("x-api-key", "KEY");

			return headers;
		},
	}),
	endpoints(builder) {
		return {
			societes: builder.query({
				query: () => "/societe",
			}),
			societe: builder.query({
				query: (id) => `/societe/${id}`,
			}),
			addSociete: builder.mutation({
				query: (data) => ({
					url: "/societe",
					method: "POST",
					body: data,
				}),
			}),
		};
	},
});

export const { useFetchSocieteQuery } = societeApi;
