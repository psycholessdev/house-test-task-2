'use client'
import styles from './Comment.module.scss'
import React from 'react'

interface IPost {
  name: string
  email: string
  body: string
  onClick?: () => void
  key?: string | number
}

export const Comment: React.FC<IPost> = ({ name, email, body, onClick }) => {
  return (
    <div className={styles.comment} onClick={onClick}>
      <div className={styles.comment__name}>
        {name} | {email}
      </div>
      <p className={styles.comment__content}>{body}</p>
    </div>
  )
}

export const CommentSkeleton: React.FC<{ key?: string | number }> = () => {
  return <div className={`${styles.comment} ${styles['comment_skeleton']}`} />
}
