import React from 'react'
import { useRouter } from 'next/router'

function projectId() {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>the project page</h1>
    </div>
  )
}

export default projectId
