'use client'
import styles from './PostList.module.scss'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useGetPostsQuery } from '@/store/postsSlice'

import { Post, PostSkeleton } from '@/components'

const PostSkeletonList = () => {
  return (
    <>
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <PostSkeleton key={i} />
        ))}
    </>
  )
}

export const PostList = () => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')
  const search = searchParams.get('title_like')

  const { data: posts, isLoading } = useGetPostsQuery({ page, search })

  return (
    <div className={styles['post-list']}>
      {isLoading && <PostSkeletonList />}

      {posts?.map(post => (
        <Post id={post.id} title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  )
}
