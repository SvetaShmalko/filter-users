import React, { useEffect } from 'react'
import User from '../User/User'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { GET_RANDOM_USERS } from './../../redux/constants'
import './UserList.css'


function UserList({ users }) {
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(json => {
                dispatch({type: GET_RANDOM_USERS, payload: json.results})
            })
        }, [])

    return (
        <div className="user_list">
            { users.map(user => {
                return <User user={user} key={user.id.value + Math.random().toString()} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
    }
}

export default connect(mapStateToProps, null)(UserList)