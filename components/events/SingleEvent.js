import React from 'react'
import Link from 'next/Link'
import styles from './SingleEvent.module.css'

function SingleEvent({ title, image, date, location, id }) {
  const humanDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const address = location.replace(', ', '\n')
  const routeLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title}></img>
      <div className={styles.content}>
        <div className={styles.summery}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{humanDate}</time>
          </div>
          <div className={styles.address}>
            <address>{address}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href={routeLink}> EXPLORE EVENT</Link>
        </div>
      </div>
    </li>
  )
}

export default SingleEvent
