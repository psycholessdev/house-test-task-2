'use client'
import styles from './Button.module.scss'
import React from 'react'

interface IButton {
  children: React.ReactNode | string
  disabled?: boolean
}

const Button: React.FC<IButton & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.button_disabled : ''}`}
      disabled={disabled}
      {...props}>
      <span className={styles.button__text}>{children}</span>
    </button>
  )
}
export default Button
