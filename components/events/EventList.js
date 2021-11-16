import React from 'react'
import SingleEvent from './SingleEvent'
import styles from './EventList.module.css'

function EventList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => {
        return <SingleEvent key={event.id} {...event} />
      })}
    </ul>
  )
}

export default EventList
