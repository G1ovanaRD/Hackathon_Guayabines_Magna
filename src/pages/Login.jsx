import React from 'react'
import LoginCard from '../components/LoginCard'
import { Box } from '@mui/material'

export default function Login() {
  return (
    <Box
        component="div"
        sx={{
            display: "flex",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
        }}
    >
        <LoginCard />
    </Box>
  )
}
