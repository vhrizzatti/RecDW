/*
a) O problema é que nao a verificação se o dado informado é um numero, o que pode dar problema.
*/

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({ message: 'ID deve ser um número válido' });
    }

    const user = users.find(user => user.id === id);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});
