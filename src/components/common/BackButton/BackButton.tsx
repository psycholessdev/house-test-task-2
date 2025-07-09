'use client'
import styles from './BackButton.module.scss'
import React from 'react'
import Image from 'next/image'

interface IBackButton {
  onClick?: () => void
}

export const BackButton: React.FC<IBackButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  ...props
}) => {
  return (
    <button className={styles['back-button']} onClick={onClick} {...props}>
      <Image src="/icons/arrow_back.png" alt="Back icon" width={26} height={26} />
    </button>
  )
}
