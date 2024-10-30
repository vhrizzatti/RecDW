/*
a) O problema é que quando nao se faz a validação, o dado inserido pode ser de um tipo não desejado.
*/
app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name || typeof name !== 'string' || name.length < 3) {
        return res.status(400).json({ message: 'O campo "name" deve ser uma string com pelo menos 3 caracteres.' });
    }

    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});