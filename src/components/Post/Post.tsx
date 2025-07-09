'use client'
import styles from './Post.module.scss'
import React from 'react'
import Link from 'next/link'

interface IPost {
  id: string
  title: string
  body: string
  onClick?: () => void
  key?: string
}

export const Post: React.FC<IPost> = ({ id, body, title, onClick }) => {
  return (
    <Link href={`/post/${id}`} className={styles.post} onClick={onClick}>
      <div className={styles.post__title}>{title}</div>
      <p className={styles.post__content}>{body}</p>
    </Link>
  )
}

export const PostSkeleton: React.FC<{ key?: string | number }> = () => {
  return <div className={`${styles.post} ${styles['post_skeleton']}`} />
}
