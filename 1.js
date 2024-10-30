/*
a) uso de rotas desnecessarias 

b) podemo corrigir apagando essas rotas 
   
c)                   */

app.post('/users', (req, res) => { 

const newUser = { id: users.length + 1, ...req.body }; 
   
users.push(newUser); 
   
res.status(201).json(newUser); 
   
}); 
   
app.get('/users', (req, res) => { 
res.status(200).json(users); 
   
 }); 
 
