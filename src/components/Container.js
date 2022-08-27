import { Tween } from 'react-gsap';
import Tilt from 'react-tilt'

import SpiderManName from '../images/SpiderMan-Name.png'
import SpiderMan from '../images/SpiderMan.png'
import { ReactComponent as PlayStation } from '../images/ps.svg'
import { ReactComponent as Marvel } from '../images/marvel.svg'

export default function Container() {
  return (
    <Tween
      from={{ y: 50, opacity: 0 }}
      to={{ y: 0, opacity: 1, delay: 6.5}}
      duration={0.7}>
          <section className="container">
            <div className="container-item-1">
              <div className="px-1">
                <img src={SpiderManName} alt="Spider-Name" />
              </div>
              <p className="my-2">
              Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man.
              </p>
              <div>
                <a href="#PreOrder" className="btn">Pre-order now</a>
                <a href="#PreOrder" className="ml-2 btn-secondary">Watch the tease</a>
              </div>
              <div className="flex align-items-center mt-1">
                <PlayStation className='w-auto'/>
                <Marvel className='w-auto ml-2'/>
              </div>
            </div>
            <div className="container-item-2">
              <Tilt className="Tilt">
                <img src={SpiderMan} className="spiderman Tilt-inner" alt="SpiderMan" />
              </Tilt>
            </div>
          </section>
    </Tween>
  )
}