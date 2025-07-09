'use client'
import React, { useCallback, useEffect, useState } from 'react'
import styles from './SearchBar.module.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'

import { Input, Button } from '@/components/common'

const SearchBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [searchText, setSearchText] = useState(searchParams.get('title_like') || '')
  const [debounceSearchText] = useDebounce(searchText, 300)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete(name)
      if (value !== '') {
        params.set(name, value)
      }

      return params.toString()
    },
    [searchParams],
  )

  useEffect(() => {
    router.push(`${pathname}?${createQueryString('title_like', debounceSearchText)}`)
  }, [router, pathname, createQueryString, debounceSearchText])

  return (
    <form className={styles['search-bar']} onSubmit={e => e.preventDefault()}>
      <Input
        type="text"
        name="titleLike"
        label="Поиск по названию"
        sizeFull
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <Button type="submit">Поиск</Button>
    </form>
  )
}
export default SearchBar
