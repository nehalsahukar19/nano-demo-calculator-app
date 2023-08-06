baseRouter.get('/greeting', (req, res) => {
    res.status(200).send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const { first, second } = req.body;
    if (typeof first !== 'number' || typeof second !== 'number') {
        return res.status(400).json({ error: 'Both first and second must be numbers.' });
    }
    const result = first + second;
    res.status(200).json({ result });
});


baseRouter.post('/subtract', (req, res) => {
    const { first, second } = req.body;
    if (typeof first !== 'number' || typeof second !== 'number') {
        return res.status(400).json({ error: 'Both first and second must be numbers.' });
    }
    const result = first - second;
    res.status(200).json({result});
});