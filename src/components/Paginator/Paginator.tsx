'use client'
import styles from './Paginator.module.scss'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import ReactPaginate from 'react-paginate'

export const Paginator = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') || '1'
  const titleLike = searchParams.get('title_like')

  const handlePageChange = ({ selected }: { selected: number }) => {
    const searchParam = titleLike ? `&title_like=${encodeURIComponent(titleLike)}` : ''
    router.push(`/?page=${selected + 1}${searchParam}`)
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={handlePageChange}
      forcePage={Math.max(0, page - 1)}
      pageRangeDisplayed={5}
      pageCount={10} // the task requested only 10 pages
      containerClassName={styles.paginator}
      pageClassName={styles.paginator__page}
      activeClassName={styles.paginator__page_active}
      disabledClassName={styles.paginator__page_disabled}
      breakClassName={styles.paginator__page}
      nextClassName={styles['paginator__nav-button']}
      previousClassName={styles['paginator__nav-button']}
    />
  )
}
