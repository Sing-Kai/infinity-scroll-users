import React, {useRef, useEffect, useState} from 'react'
import UserContainer from './UserContainer';
import Text from './Text'
import { useInView } from 'react-intersection-observer';
import useOnScreen from '../hooks/useOnScreen';

const User = ({name, email, newLimit, isLast, phone}) => {

  // const ref = useRef<HTMLDivElement>(null)
  // const ref = useRef(null);
  // const isVisible = useOnScreen(ref)
  // console.log('is elemement visible', isVisible)

  //Select the Card component with useRef

  const {ref, inView} = useInView();

  console.log('is in view', inView);

  // const [isVisible, setIsVisible] = useState(false);
  const options = {
    // root: document.querySelector('#scrollArea'),
    // rootMargin: '0px',
    threshold: 0.01
  }

  //Implement Intersection Observer to check if the last Card in the array is visible on the screen, then set a new limit
  useEffect(() => {

    console.log('useEffect hook getting called')

    if (!ref?.current){
      return;
    } 

    // if(isLast && isVisible){
    //   console.log('do something to fetch more data')
    // }

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting ) {
        // newLimit();
        console.log('last and is intersecting')
        observer.unobserve(entry.target);
      }
    }, options);

    // observer.observe(ref.current);
  }, [isLast]);

  return(
      <UserContainer>
        <div ref={ref}>
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
          <div>{'is last ' + isLast}</div>
        </div>
      </UserContainer>
  )
}

export default User