import styles from './page.module.scss'
import { SearchBar } from '@/components'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const titleLike = (await searchParams)['title_like']
  console.log(titleLike)

  return (
    <div className={styles['main-page']}>
      <h1 className={styles['main-page__title']}>Cписок постов</h1>

      <SearchBar />
    </div>
  )
}
