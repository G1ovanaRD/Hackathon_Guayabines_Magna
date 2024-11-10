import React from 'react'
import Layout from '../components/Layout/Layout'
import DepartedList from '../components/DepartedList'
import { Box } from '@mui/material'

export default function Departed() {
  return (
    <Layout>
        <Box
            component="div"
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                maxWidth: "1000px",
                margin: "auto",
                mt: "10px",
            }}
        >
            <DepartedList />
        </Box>
    </Layout>
  )
}
