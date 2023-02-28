import React, {useRef, useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch';
import User from './User'
import UsersContainer from './UsersContainer';
import randomUsers from '../api/random-users';

const Users =() => {
  const [page, setPage] = useState(1);
  const [isObservingLast, setIsObservingLast] = useState(true);
  const {loading, error, users} = useFetch(randomUsers, page)

  const handleIsLast = (i, users) =>{
    // console.log('i', i)
    // console.log('total users', users.length)
    // console.log('is last', i === users.length -1)
    // setIsObservingLast(i === users.length -1)

    return i === users.length -1
  }

  return (
    <UsersContainer>
      {
        users.map((user, i) => {
          const {name, email, phone, website} = user
          const fullName = name.first + ' ' + name.last
          return (<User
            key={Math.random()}
            name = {fullName}
            phone={phone}
            website={website}
            email = {email}
            isLast = {handleIsLast(i, users)}
            newLimit = {() => setPage(page + 1)}
            // observing = {()=> isObservingLast? setIsObservingLast(false): setIsObservingLast(true)}
          />)
        })
      }

    </UsersContainer>
  )

}

export default Users