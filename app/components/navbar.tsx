import Image from 'next/image'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { FaMagnifyingGlass, FaPlus, FaStar } from 'react-icons/fa6'
import { PiFilmReelFill, PiTelevisionFill } from 'react-icons/pi'

export default function Navbar() {
  const navLinks = [
    {
      icon: <AiFillHome />,
      text: "Home",
      url: "/"
    },
    {
      icon: <FaMagnifyingGlass />,
      text: "Search",
      url: "/search"
    }
    ,
    {
      icon: <FaPlus />,
      text: "Watchlist",
      url: "/watchlist"
    }
    ,
    {
      icon: <FaStar />,
      text: "Originals",
      url: "/originals"
    }
    ,
    {
      icon: <PiFilmReelFill />,
      text: "Movies",
      url: "/movies"
    }
    ,
{
      icon: <PiTelevisionFill />,
      text: "series",
      url: "/series"
    }
  ]
  return (
    <nav className="navbar flex items-center mx-9 my-3 text-white">
      <div className='logo mr-12'>
        <Image 
          src="https://firebasestorage.googleapis.com/v0/b/disney-61118.appspot.com/o/disney%2Fdisney-nav-logo.svg?alt=media&token=8138399b-2e20-4873-996d-bc50ca64b1b8"
          alt="Disney logo"
          width={79}
          height={48}
          priority
        />
      </div>
      <div className='links flex flex-1 uppercase'>
        {navLinks.map(link =>{
          return (
            <Link key={link.text} href={link.url} className='flex mr-4'><span className='mx-2 self-center'>{link.icon}</span><p>{link.text}</p></Link>
          )
        })}
      </div>
      <div className='active-profile flex'>
        <p className='capitalize'>username / avatar goes here</p>
      </div>
    </nav>
  )
}