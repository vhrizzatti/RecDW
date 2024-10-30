/*
a) O PUT atualiza todo o item, já o PATCH especifica apenas as aterações.

b)   */

app.patch('/users/:id', (req, res) => { 
const id = parseInt(req.params.id); 
const user = users.find(user => user.id === id); 
   
if (user) { 
   user.name = req.body.name; 
   res.status(200).json(user); 
   } else { 
    res.status(404).json({ message: 'Usuário não encontrado' }); 
   } 
   
}); 
   
   