import styles from './page.module.scss'
import { SearchBar, PostList, Paginator } from '@/components'

export default function Home() {
  return (
    <div className={styles['main-page']}>
      <h1 className={styles['main-page__title']}>Cписок постов</h1>

      <SearchBar />
      <PostList />
      <div className={styles['main-page__paginator-wrapper']}>
        <Paginator />
      </div>
    </div>
  )
}
