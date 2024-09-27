import React from 'react'


function Profile(props) {

    const{ name , imageUrl } = props.data
  return (
    <div>
        <h1>Thanchira Profile</h1>
        <hr />
        <h3>{props.data.name}</h3>
        <img src={props.data.imageUrl} alt="" />
    </div>
  )
}

export default Profile 