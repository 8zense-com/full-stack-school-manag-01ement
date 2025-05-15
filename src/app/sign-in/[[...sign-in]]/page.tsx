import React from 'react'
import { redirect } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { SignIn } from '@clerk/nextjs'
const page = () => {
  return (
    <div>SignIn</div>
  )
}

export default page