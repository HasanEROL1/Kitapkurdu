import React from 'react'

const Info = ({title,value}) => {
  return (
    <p className=' fs-5'>
        <span className='badge bg-danger'>{title}</span>
        <span>{value}</span>
    </p>
  )
}
export default Info;