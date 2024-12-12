import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}

export default AboutLayout
