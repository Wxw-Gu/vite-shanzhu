import React from 'react'

export const AddltemFloatButton: React.FC = () => {
  return (
    <button p-4px w-56px h-56px bg='#5C33BE' rounded="50%" b-none fixed right-16px bottom-16px text-white>
      <svg style={{ fill: 'red', width: '1.2em', height: '1.2em' }}>
        <use xlinkHref='#menu'/>
      </svg>
    </button>
  )
}
