import express from 'express'

import route from './routes/materiales.route'

const app = express()

app.use(express.json())

app.use("/api", route);


app.listen(3000)
console.log('server on port', 3000)
