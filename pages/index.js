import Link from 'next/Link'
import { getFeaturedEvents } from '../dummyData'
import EventList from '../components/events/EventList'

const homePage = () => {
  const FeaturedEvents = getFeaturedEvents()
  return (
    <div>
      <EventList events={FeaturedEvents} />
    </div>
  )
}

export default homePage
