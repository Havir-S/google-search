import React from 'react'

function HeaderOption({Icon, title, selected}) {
  return (
    <div className={`flex items-centered space-x-1 pb-2 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500  cursor-pointer ${selected && 'text-blue-500 border-blue-500'}`}>
        <Icon className='h-4' />
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption