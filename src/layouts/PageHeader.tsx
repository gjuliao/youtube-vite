import { Menu } from 'lucide-react'
import React from 'react'

export const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between'>
        <div className='flex gap-2 items-center flex-shrink-0'>
            <Menu />
            <a href='/'>
                <h1 className='text-2xl font-bold text-red-500 hover:text-red-700'>
                    YouTube
                </h1>
            </a>
        </div>
    </div>
  )
}