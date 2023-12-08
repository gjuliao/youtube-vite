import { Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import { Button } from '../components/Button'
import { useState } from 'react'

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  return (
    <div className="gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <div className='flex gap-2 items-center flex-shrink-0'>
          <Button variant="default" size="icon">
            <Menu />
          </Button>
            <a href='/'>
                <h1 className='text-2xl font-bold text-red-500 hover:text-red-700'>
                    YouTube
                </h1>
            </a>
        </div>
        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden sm:flex"}`}>
          <div className='flex flex-grow max-w-[600px]'>
            <input 
              type="search" 
              placeholder="search" 
              className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
            />
            <Button variant="default" className='py-2 px-4 rounded-r-full border-secondary-border border border-1-0 flex-shrink-0'>
              <Search />
            </Button>
          </div>
          <Button size="icon" variant="default" className='flex-shrink-0'>
            <Mic />
          </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden" : "flex"}`}>
          <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className='sm:hidden'>
            <Search />
          </Button>
          <Button size="icon" variant="ghost" className='sm:hidden'>
            <Mic />
          </Button>
          <Button size="icon" variant="ghost">
            <Upload />
          </Button>
          <Button size="icon" variant="ghost">
            <Bell />
          </Button>
          <Button size="icon" variant="ghost">
            <User />
          </Button>
        </div>
    </div>
  )
}