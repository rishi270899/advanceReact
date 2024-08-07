import React from 'react'
import ChildD from './ChildD'

function ChildC({name}) {
  return (
    <>
    <ChildD name={name}/>
    </>
  )
}

export default ChildC