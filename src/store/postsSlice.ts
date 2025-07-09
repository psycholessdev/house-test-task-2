import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define TypeScript interfaces for API data
export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface Comment {
  id: number
  name: string
  email: string
  body: string
  postId: number
}

// Define the RTK Query API
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    // Fetch posts with pagination and search
    getPosts: builder.query<Post[], { page: string; search: string }>({
      query: ({ page, search }) =>
        `/posts?_page=${page}&_limit=9${search ? `&title_like=${search}` : ''}`,
    }),

    // Fetch a single post by ID
    getPost: builder.query<Post, string>({
      query: id => `/posts/${id}`,
    }),

    // Fetch comments for a post
    getPostComments: builder.query<Comment[], string>({
      query: postId => `/posts/${postId}/comments`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery, useGetPostCommentsQuery } = postsApi
