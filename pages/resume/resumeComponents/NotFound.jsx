import React from 'react'

function NotFound(props) {
  return (
    <div style={{ "color": "red" }}>Command "{props.command}": did not return any files <br></br></div>
  )
}

export default NotFound