import express from 'express';
const app = express();
// www.minhaapi.com/tenho que colocar dentro do get
app.get('/angame', (request, response) => {
    // console.log('Deu certo!')
    return response.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        {id: 4, name: 'Anuncio 4'},
    ]);
});
app.listen(3333);
