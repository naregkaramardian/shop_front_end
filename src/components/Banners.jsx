import { Fragment, useState } from 'react'
import { Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

export default function Banner() {
  const [show, setShow] = useState(true)
  return (
    <Transition show={show} as={Fragment} enter='transform ease-out duration-300 transition' enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2' enterTo='translate-y-0 opacity-100 sm:translate-x-0' leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
      <div className='sticky top-0 z-50 bg-indigo-600'>
        <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='pr-16 sm:text-center sm:px-16'>
            <p className='font-medium text-white'>
              <span className='md:hidden'>Congrats! You've Nominated 5 movies!</span>
              <span className='hidden md:inline'>Congrats! You've Nominated 5 movies!</span>
            </p>
          </div>
          <div className='absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start'>
            <button
              onClick={() => {
                setShow(false)
              }}
              type='button'
              className='flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white'
            >
              <span className='sr-only'>Dismiss</span>
              <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
            </button>
          </div>
        </div>
      </div>
    </Transition>
  )
}
