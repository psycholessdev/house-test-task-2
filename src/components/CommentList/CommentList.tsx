'use client'
import styles from './CommentList.module.scss'
import React from 'react'
import { useGetPostCommentsQuery } from '@/store/postsSlice'

import { Comment, CommentSkeleton } from '@/components'

const CommentSkeletonList = () => {
  return (
    <>
      {Array(9)
        .fill(null)
        .map((_, i) => (
          <CommentSkeleton key={i} />
        ))}
    </>
  )
}

export const CommentList: React.FC<{ postId: string }> = ({ postId }) => {
  const { data: comments, isLoading } = useGetPostCommentsQuery(postId)

  return (
    <div className={styles['comment-list']}>
      {isLoading && <CommentSkeletonList />}

      {comments?.map(comment => (
        <Comment name={comment.name} email={comment.email} body={comment.body} key={comment.id} />
      ))}
    </div>
  )
}
