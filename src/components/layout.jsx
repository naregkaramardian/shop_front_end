/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import Search from './Search'
import NomiationList from './NomiationList'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Layout({ addNominationList, nominations, setNotify, removeNominations }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='h-screen flex overflow-hidden bg-gray-100'>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as='div' static className='fixed inset-0 flex z-40 xl:hidden' open={sidebarOpen} onClose={setSidebarOpen}>
          <Transition.Child as={Fragment} enter='transition-opacity ease-linear duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='transition-opacity ease-linear duration-300' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child as={Fragment} enter='transition ease-in-out duration-300 transform' enterFrom='-translate-x-full' enterTo='translate-x-0' leave='transition ease-in-out duration-300 transform' leaveFrom='translate-x-0' leaveTo='-translate-x-full'>
            <div className='relative flex-1 flex flex-col max-w-xl w-full bg-indigo-700 '>
              <Transition.Child as={Fragment} enter='ease-in-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in-out duration-300' leaveFrom='opacity-100' leaveTo='opacity-0'>
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={() => setSidebarOpen(false)}>
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto '>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <h1 className='text-2xl font-semibold text-white'>Nominations</h1>
                </div>
                <nav className='mt-5 px-2 space-y-1 '>
                  <NomiationList nominations={nominations} removeNominations={removeNominations} />
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden bg-indigo-700 xl:flex xl:flex-shrink-0 w-2/5'>
        <div className='flex flex-col w-full'>
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className='flex flex-col h-0 flex-1'>
            <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
              <div className='flex items-center flex-shrink-0 px-4'>
                <h1 className='text-2xl font-semibold text-white'>Nominations</h1>
              </div>
              <nav className='mt-5 flex-1 px-2 space-y-1'>
                <NomiationList nominations={nominations} removeNominations={removeNominations} />
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='xl:hidden pl-1 pt-1 sm:pl-3 sm:pt-3'>
          <button className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500' onClick={() => setSidebarOpen(true)}>
            <span className='sr-only'>Open sidebar</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
          <div className='py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              <h1 className='text-2xl font-semibold text-gray-900'>Shoppies</h1>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              {/* Replace with your content */}
              <Search addNominationList={addNominationList} nominations={nominations} setNotify={setNotify} />
              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
