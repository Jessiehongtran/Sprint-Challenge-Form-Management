import React from 'react';

const UserProfile = (props) => {
    console.log('props in UserPorfile', props)

    return (
        <div>{props.data.name}</div>
    )
}

export default UserProfile