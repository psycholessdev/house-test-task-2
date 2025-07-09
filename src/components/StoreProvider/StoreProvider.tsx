'use client'
import { Provider } from 'react-redux'
import { store } from '@/store'
import type { ReactNode } from 'react'
import React from 'react'

export const StoreProvider: React.FC<{
  readonly children: ReactNode
}> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
