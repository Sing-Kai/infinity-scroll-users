import React, {useRef, useEffect, useState} from 'react'
import UserContainer from './UserContainer';
import Text from './Text'
import { useInView } from 'react-intersection-observer';

const User = ({name, email, newLimit, isLast, website, phone}) => {
  //Select the Card component with useRef
  const cardRef = useRef(null);
  // const {ref: cardRef, inView} = useInView();

  const [isVisible, setIsVisible] = useState(false);
  const options = {
    // root: document.querySelector('#scrollArea'),
    // rootMargin: '0px',
    threshold: 1.0
  }

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
    }, options);

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