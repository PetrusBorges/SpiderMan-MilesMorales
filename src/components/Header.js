import { Tween } from 'react-gsap';

import { ReactComponent as SpiderLogo } from '../images/Spider-logo.svg'
import { ReactComponent as Facebook } from '../images/icon-facebook.svg'
import { ReactComponent as Instagram } from '../images/icon-instagram.svg'
import { ReactComponent as Youtube } from '../images/icon-youtube.svg'
import { ReactComponent as Twitter } from '../images/icon-twitter.svg'

export default function Header() {
  return (
    <Tween
      from={{ y: -50, opacity: 0 }}
      to={{ y: 0, opacity: 1, delay: 6}}
      duration={0.7}>
          <header>
          <nav className="navbar">
            <div className="nav-menu ml-2">
              <SpiderLogo className='logo'/>
              <ul className="nav-list">
                <li><a href="#Home" className="nav-link">Home</a></li>
                <li><a href="#Story" className="nav-link">Story</a></li>
                <li><a href="#Wallpapers" className="nav-link">Wallpapers</a></li>
                <li><a href="#BeYourself" className="nav-link">#BeYourself</a></li>
              </ul>
            </div>
            <div className="nav-social mr-2">
              <Facebook className='social-logo'/>
              <Instagram className='social-logo'/>
              <Youtube className='social-logo'/>
              <Twitter className='social-logo'/>
            </div>
            <div className="bx mr-2"></div>
          </nav>
        </header>                         
    </Tween>
  )
}