const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const messagescontroller = require('./controllers/messages_controller')

app.use(bodyParser.json())

const messagesBaseUrl = '/api/messages'
app.post( messagesBaseUrl, messagescontroller.create )
app.get( messagesBaseUrl, messagescontroller.read )
app.put( `${messagesBaseUrl}/:id`, messagescontroller.update )
app.delete( `${messagesBaseUrl}/:id`, messagescontroller.delete )

const port = 3000;

app.listen(port, () => { console.log(`Server listening on port ${port}`); })

