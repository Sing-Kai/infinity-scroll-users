import React, {useRef, useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch';
import User from './User'
import UsersContainer from './UsersContainer';

const Users =() => {
  const [page, setPage] = useState(1);
  const {loading, error, users} = useFetch('https://jsonplaceholder.typicode.com/users', page)

  // if(loading){
  //   return <div>loading</div>
  // }

  // if(error){
  //   return <div>error</div>
  // }

  return (
    <UsersContainer>
      {
        users.map((user, i) => {
          const {name, email, company, phone, username, website} = user
          console.log(user)
          return (<User
            key={Math.random()}
            name = {name}
            username ={username}
            company={company}
            phone={phone}
            website={website}
            email = {email}
            isLast = {i === users.length -1}
            newLimit = {()=> setPage(page + 1)}
          />)
        })
      }
    </UsersContainer>
  )

}

export default Users