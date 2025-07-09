import styles from './page.module.scss'

import { CommentList } from '@/components'
import { BackButton } from '@/components/common'
import Link from 'next/link'

export default async function Home({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  return (
    <div className={styles['comments-page']}>
      <div className={styles['comments-page__title']}>
        <Link href="/">
          <BackButton />
        </Link>
        <h1 className={styles['comments-page__title-text']}>Комментарии к посту</h1>
      </div>

      <CommentList postId={postId} />
    </div>
  )
}
