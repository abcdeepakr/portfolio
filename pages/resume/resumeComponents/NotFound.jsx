import React from 'react'

function NotFound(props) {
  return (
    <div style={{ "color": "red" }}>Command &quot;{props.command}&quot;: did not return any files, make sure to use &quot;cat _filename_&quot; to view file content.<br></br></div>
  )
}

export default NotFound