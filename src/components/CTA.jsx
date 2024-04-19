import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p className='cta-text'> Have a project in mind? <br className='sm:block hidden' />
        Let's build together!
        </p>
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA