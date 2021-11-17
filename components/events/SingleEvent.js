import React from 'react'
import styles from './SingleEvent.module.css'
import Button from './ui/Button'
import DateIcon from './icons/date-icon'

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
            <DateIcon />
            <time>{humanDate}</time>
          </div>
          <div className={styles.address}>
            <address>{address}</address>
          </div>
        </div>

        <div className={styles.actions}>
          <Button link={routeLink}>EXPLORE EVENT</Button>
        </div>
      </div>
    </li>
  )
}

export default SingleEvent
