'use client'
import styles from './SearchBar.module.scss'
import React, { useCallback, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { searchBarFormSchema } from '@/schemas'
type SearchBarFormData = z.infer<typeof searchBarFormSchema>

import { Input } from '@/components/common'

const SearchBar = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const form = useForm<SearchBarFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(searchBarFormSchema),
    defaultValues: {
      titleLike: searchParams.get('titleLike') || '',
    },
  })

  // Watch input for debounced updates
  const searchText = form.watch('titleLike')
  const [debounceSearchText] = useDebounce(searchText, 300)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.delete('page')
      params.delete(name)
      if (value !== '') {
        // Reset page for new searches
        params.set('page', '1')
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
        {...form.register('titleLike')}
      />
    </form>
  )
}
export default SearchBar
