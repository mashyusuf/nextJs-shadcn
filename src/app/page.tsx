import { Button } from '@/components/ui/button'
import React from 'react'

function Page() {
  return (
    <div className='flex font-bold text-2xl items-center justify-center min-h-screen flex-col sp'>
      hello this is Next.js
      <div className='mt-5 mb-5'>
        <button className='px-4 py-2 text-sm bg-yellow-500 rounded-sm hover:bg-yellow-600'>Click Me!</button>
      </div>
      <div>
      <Button className='border-purple-600 text-purple-700 hover:bg-purple-700 hover:text-white' variant="outline">Outline</Button>
      </div>
      <div className='mt-2'>
        <Button variant={'tryButton'}>Customize Button</Button>
      </div>
    </div>
  )
}

export default Page
