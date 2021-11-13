import React from 'react'
import { useRouter } from 'next/router'

function clientProjectId() {
  const router = useRouter()

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>client project id</h1>
    </div>
  )
}

export default clientProjectId
