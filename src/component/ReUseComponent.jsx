import React from 'react'

function ReUseComponent(props) {
  return (
    <>
    <h1>hello</h1>
    <span>{props.data.name}</span>
    <br />
    <span>{props.data.email}</span>
    <br />
    <span>{props.data.phone}</span>
    </>
  )
}

export default ReUseComponent