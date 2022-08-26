/* eslint-disable react/jsx-key */
import { Container } from 'react-bootstrap'
import Link from 'next/link'


const MiniNav = ({activeLink}) => {
  return (
    <Container fluid  >
      <Container >
      <div className='hidden md:block' > 
        <div className='flex justify-between uppercase text-xs mt-8'>
          <div>
            <span>
              <Link href='/'>
                <a style={{color: '#144388'}} >
                {'Home  ' }&nbsp; &#x003E;
                </a>
              </Link>
            </span>
            <span>
              <Link href='/about_us'>
                <a style={{color: '#144388'}} >
                {"About us"} &nbsp; &#x003E;
                </a>
              </Link>
            </span>
            <span>
              <Link href='/about_us'>
                <a>
                {activeLink}
                </a>
              </Link>
            </span>
          </div>
          <div>
            <span>
              <Link href='/'>
                <a >
                  {'become a volunteer' + ' '}&nbsp; <span style={{fontWeight: 'bold'}}> &#x29C1; </span> 
                </a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      </Container >
      <hr className='w-full h-px text-gray-600 mb-16' />
    </Container >

  )
}

export default MiniNav;