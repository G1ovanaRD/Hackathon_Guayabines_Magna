import React from 'react'
import AppMenu from '../AppMenu'
import Footer from '../Footer'

export default function Layout( { children } ) {
  return (
    <>
        <AppMenu />
        <main style={{ height: '100%'}}>{children}</main>
        <Footer />
    </>
  )
}
