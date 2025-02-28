import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDataBase";



export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ["profileImageGet"],
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res)
                return transformedResponse;
            }
        }),
        getProductById: builder.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (res) => {
                const transformedResponse = Object.values(res);
                if (transformedResponse.length) return transformedResponse[0];
            },
        }),
        
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
                url: "orders.json",
                method: "POST",
                body: order,
            }),
        }),
        getOrdersByUser: builder.query({
            query: (user) => `orders.json?orderBy="user"&equalTo="${user}"`,
            transformResponse: (res) => {
                if (!res) return [];
                const transformedResponse = Object.entries(res).map(([id, order]) => ({
                    id,
                    ...order,
                }));
                return transformedResponse;
            },
        }),
        getProfileimage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ["profileImageGet"],
        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: "PUT",
                body: {
                    image: image,
                },
            }),
            invalidatesTags: ["profileImageGet"],
        }),
    })
})

export const { useGetCategoriesQuery
    , useGetProductsByCategoryQuery
    , useGetProductByIdQuery
    , usePostOrderMutation
    , useGetOrdersByUserQuery
    , useGetProfileimageQuery
    , usePostProfileImageMutation } = shopApi;