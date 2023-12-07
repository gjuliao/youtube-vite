import { Bell, Menu, Upload, User } from 'lucide-react'
import { Button } from '../components/Button'

export const PageHeader = () => {
  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className='flex gap-2 items-center flex-shrink-0'>
          <Button variant="default" size="icon">
            <Menu />
          </Button>
            <a href='/'>
                <h1 className='text-2xl font-bold text-red-500 hover:text-red-700'>
                    YouTube1
                </h1>
            </a>
        </div>
        <div></div>
        <div className='flex flex-shrink-0 md:gap-2'>
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