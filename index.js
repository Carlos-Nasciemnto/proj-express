const express = require( 'express' )
const app = express()
const port = 3003

const indexRouter = require('./routes/index')
const clientsRouter = require('./routes/clients')

app.use('/', indexRouter)
app.use('/clients', clientsRouter)

app.listen( port, () => console.log(' Listening on port:' + port ) )