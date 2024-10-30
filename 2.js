/*
a) O erro esta na saida que aparece ao usuario, falta utilizar o res.status()

b)       */
app.delete('/users/:id', (req, res) => { 
const id = parseInt(req.params.id); 
const userIndex = users.findIndex(user => user.id === id); 
   
if (userIndex !== -1) { 
   users.splice(userIndex, 1); 
   res.res.status(200).json({ message: 'Usuário excluído' }); 
   
} else { 
   res.res.status(404).json({ message: 'Usuário não encontrado' }); 
   } 
   
}); 
   