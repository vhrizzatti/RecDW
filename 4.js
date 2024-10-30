/*
a) São links que redirecionam o usuario, facilitando a navegação.
*/
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);

    if (user) {
        res.status(200).json({
            user: user,
            links: [
                {
                    rel: 'self',
                    href: `${req.protocol}://${req.get('host')}/users/${user.id}`
                },
                {
                    rel: 'update',
                    href: `${req.protocol}://${req.get('host')}/users/${user.id}`
                },
                {
                    rel: 'delete',
                    href: `${req.protocol}://${req.get('host')}/users/${user.id}`
                },
                {
                    rel: 'all_users',
                    href: `${req.protocol}://${req.get('host')}/users`
                }
            ]
        });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

   