import React from 'react'
import './User.css'

export default function User({ user }) {
    return (
        <div className="card" >
            <img src={user.picture.large} alt={user.name.first} />
            <h5>{ user.name.first } { user.name.last}</h5>
            <span>{ user.gender }</span>
            <span>{ user.email }</span>
            <span>{ user.dob.date.substr(0, 10) }</span>
        </div>
    )
}
