import React from 'react'
import ChildA from './ChildA'

function PropDrilling() {
    let name = "pnInfosys"
  return (
    <>
    <h1>Prop Drilling</h1>
    <ChildA name={name}/>
    </>
  )
}

export default PropDrilling