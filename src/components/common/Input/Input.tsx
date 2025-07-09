'use client'
import styles from './Input.module.scss'
import React, { ChangeEventHandler } from 'react'

interface IInput {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  label: string
  placeholder?: string
  type: string
  name: string
  id?: string
  sizeFull?: boolean
  disabled?: boolean
}

const Input = ({
  value,
  onChange,
  label,
  placeholder = ' ',
  type,
  name,
  id,
  sizeFull,
  disabled,
  ...props
}: IInput) => {
  return (
    <div
      className={`${styles.input} ${sizeFull ? styles.input_size_full : ''} ${disabled ? styles.input_disabled : ''}`}>
      <input
        placeholder={placeholder}
        disabled={disabled}
        className={styles.input__input}
        type={type}
        id={id || `input_${name}`}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label className={styles.input__label} htmlFor={id}>
        <div className={styles['input__label-text']}>{label}</div>
      </label>
    </div>
  )
}
export default Input
