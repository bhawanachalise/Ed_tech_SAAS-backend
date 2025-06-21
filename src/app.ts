import express from 'express'
const app = express()
import authRoute from "./route/globals/authRoute"
app.use("/api",authRoute)
export  default app