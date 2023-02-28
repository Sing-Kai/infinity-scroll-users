import React, {useRef, useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch';
import User from './User'
import UsersContainer from './UsersContainer';
import randomUsers from '../api/random-users';

const Users =() => {
  const [page, setPage] = useState(1);
  const {loading, error, users} = useFetch(randomUsers, page)

  console.log('total users', users.length)

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
            isLast = {i === users.length -1}
            newLimit = {()=> {
              console.log('page ' , page)
              setPage(page + 1)
            }}
          />)
        })
      }

    </UsersContainer>
  )

}

export default Users