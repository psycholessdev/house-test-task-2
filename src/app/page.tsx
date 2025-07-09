import styles from './page.module.scss'
import { SearchBar, PostList, PostSkeletonList, Paginator } from '@/components'
import { Suspense } from 'react'

export default async function Home() {
  return (
    <div className={styles['main-page']}>
      <h1 className={styles['main-page__title']}>Cписок постов</h1>

      {/* Suspense in necessary because the components above use useSearchParams hook */}
      <Suspense fallback={<PostSkeletonList />}>
        <SearchBar />
        <PostList />
        <div className={styles['main-page__paginator-wrapper']}>
          <Paginator />
        </div>
      </Suspense>
    </div>
  )
}
