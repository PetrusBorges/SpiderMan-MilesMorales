import { Tween } from 'react-gsap';

import { ReactComponent as SpiderLogo } from '../images/Spider-logo.svg'

export default function LoaderElements() {
  
  return (
    <Tween
      from={{ width: '100%' }}
      to={{ width: '0%', delay: 5 }}
      duration={1}>
        <section className="bg-loader" >
          <SpiderLogo />
        </section>
      </Tween>
  )
}