import { Box } from '@mui/material'
import React from 'react'
import TimeButtons from './employees/TimeButtons'
import EmployeesList from './employees/EmployeesList'

export default function EmployeesCard() {
  return (
    <Box
        component="div"
        sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
            maxWidth: "1000px",
            margin: "auto",
        }}
    >
            <TimeButtons />
            <EmployeesList />
    </Box>
  )
}
