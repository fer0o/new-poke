import React from 'react'

const Pagination = props => {
  const { onLeftClick, onRightClick, page, totalPages } = props
  return (
    <div>
      <div className='flex flex-row lg:space-x-4 space-x-2 items-center '>
        <button
          className='border border-black lg:pb-6 pb-3 lg:p-5 p-2  rounded-full bg-blue-500'
          onClick={onLeftClick}
        >
          <span>👈</span>
        </button>
        <h3 className='border-t-2 border-b-2 border-black p-4'>
          {page} de {totalPages}
        </h3>
        <button
          className='border border-black lg:pb-6 pb-3 lg:p-5 p-2 rounded-full bg-blue-500'
          onClick={onRightClick}
        >
          <span>👉</span>
        </button>
      </div>
    </div>
  )
}

export default Pagination
