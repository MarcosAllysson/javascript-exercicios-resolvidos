const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

let app = express();
app.use(cors());

app.get('/', function (req, res) {
    res.send("Funciona!");
});

app.get('/seunome', function (req, res) {
    res.send("What is your nome?");
});

app.get('/user', function (req, res) {
    res.send(req.headers['user-agent']);
});

app.get('/questao4/:num', (req, res) => {
    let numero = `${req.params.num}`;
    let convertido = (5 / 9 * (numero - 32)).toFixed(2); // to fixed - arredonda casas pra 2
    res.send(`Número convertido pra Celcius: <strong> ${convertido} </strong> `);
})

app.get('/questao5/:num', (req, res) => {
    let numero = `${req.params.num}`;
    let convertidoCel = 5 / 9 * (numero - 32);
    let convertidoKel = (numero - 32) * 5 / 9 + 273.15;

    res.json({
        "fahrenheit": numero,
        "celsius": convertidoCel,
        "kelvin": convertidoKel
    })
})

app.post('/questao7', (req, res) => {
    console.log(req.body);
    
    res.json({
        mensagem:'Dados recebidos com sucesso!',
        dados: {
            lado: req.body.lado
        },
        novoid:123
    });
});


app.listen(3000, function () {
    console.log('Inicialização OK!');
})