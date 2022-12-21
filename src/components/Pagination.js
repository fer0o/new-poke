import React from 'react'

const Pagination = props => {
  const { onLeftClick, onRightClick, page, totalPages } = props
  return (
    <div>
      <div className='flex flex-row space-x-4 items-center '>
        <button
          className='border border-black pb-6 p-5  rounded-full bg-blue-500'
          onClick={onLeftClick}
        >
          <span>👈</span>
        </button>
        <h3 className='border-t-2 border-b-2 border-black p-4'>
          {page} de {totalPages}
        </h3>
        <button
          className='border border-black pb-6 p-5 rounded-full bg-blue-500'
          onClick={onRightClick}
        >
          <span>👉</span>
        </button>
      </div>
    </div>
  )
}

export default Pagination
