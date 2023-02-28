import React, {useRef, useEffect, useState} from 'react'
import UserContainer from './UserContainer';
import Text from './Text'

const User = ({name, email, newLimit, isLast, username, company, website, phone}) => {
  //Select the Card component with useRef
  const cardRef = useRef(null);

  //Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
  useEffect(() => {
    if (!cardRef?.current){
      return;
    } 

    const observer = new IntersectionObserver(([entry]) => {

      if (isLast && entry.isIntersecting) {
        newLimit();
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 1
    });

    observer.observe(cardRef.current);
  }, [isLast]);

  return(
      <UserContainer>
        <div ref={cardRef}>
          <Text>
            <span className="px4">{'name: '}</span>
            <span className="px4">{name }</span>
          </Text>
          <Text>
            <span className="px4">{'website: '}</span>
            <span className="px4">{website}</span>
          </Text>
          <Text>
            <span className="px4">{'phone: '}</span>
            <span className="px4">{phone}</span>
          </Text>
          <Text>
            <span className="px4">{'email: '}</span>
            <span className="px4">{email}</span>
          </Text>
        </div>
      </UserContainer>
  )
}

export default User