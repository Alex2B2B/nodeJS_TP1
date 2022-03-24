const express = require('express')
const app = express()
const port = 3000;
// const users = require('./db');
const repository = require('./repository');

app.use(express.json())

const dataToSend = {
  // id : 1,
  firstName: 'hello',
  lastName: 'world',
  password: 'mdp'
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.send(repository.getUsers())
})

app.post('/users', (req, res) =>  {
  repository.createUser(req.body)
  res.send('request ok')
})

app.put('/users/:id', function(req, res) {
  const id = req.params.id;
  const data = req.body;
  repository.updateUser(id, data);
  res.send('update ok');
})

app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  repository.deleteUser(id, data);
  res.send('delete ok');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.put('users/:id', () = >{
  const 
})
