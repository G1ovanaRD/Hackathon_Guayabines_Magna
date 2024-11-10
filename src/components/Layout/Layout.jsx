import React from 'react'
import AppMenu from '../AppMenu'
import Footer from '../Footer'
import { Box } from '@mui/material'

export default function Layout( { children } ) {
  return (
    <>
    <Box
        component="div"
        sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
        }}
    >
        <AppMenu />
        <main style={{ flex: "1" }}>{children}</main>
        <Footer />
    </Box>
    </>
  )
}
