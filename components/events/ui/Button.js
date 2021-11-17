import React, { Children } from 'react'
import Link from 'next/Link'
import styles from '../ui/button.module.css'

function Button({ link, children }) {
  return (
    <Link href={link}>
      <a className={styles.btn}>{children}</a>
    </Link>
  )
}

export default Button
