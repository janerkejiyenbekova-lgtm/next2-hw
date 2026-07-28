import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <>
    <nav>
    <Link href={'/'}>Home</Link>
     <Link href={'/catalog'}>Catalog</Link>
      <Link href={'/news'}>News</Link>
       <Link href={'/admin'}>Admin</Link>
        
   </nav>
    
    </>
  )
}

export default Nav