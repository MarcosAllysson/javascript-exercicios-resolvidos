const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/questao5/:codigo', (req, res) => {
    let codigo = `${req.params.codigo}`;

    if(codigo == 'CBRA'){
        res.json({
            "Nome Campus": "Brasília",
            "Url Base": "https://www.ifb.edu.br/brasilia",
            "Url Cursos": "https://www.ifb.edu.br/brasilia/cursos"
        })
    }
    else if(codigo == 'CCEI'){
        res.json({
            "Nome Campus": "Ceilândia",
            "Url Base": "https://www.ifb.edu.br/campus-ceilandia",
            "Url Cursos": "https://www.ifb.edu.br/campus-ceilandia/cursos"
        })
    }
    else if(codigo == 'CEST'){
        res.json({
            "Nome Campus": "Estrutural",
            "Url Base": "https://www.ifb.edu.br/campus-estrutural",
            "Url Cursos": "https://www.ifb.edu.br/campus-estrutural/cursos"
        })
    }
    else if(codigo == 'CGAM'){
        res.json({
            "Nome Campus": "Gama",
            "Url Base": "https://www.ifb.edu.br/gama",
            "Url Cursos": "https://www.ifb.edu.br/gama/cursos"
        })
    }
    else if(codigo == 'CPLA'){
        res.json({
            "Nome Campus": "Planaltina",
            "Url Base": "https://www.ifb.edu.br/planaltina",
            "Url Cursos": "https://www.ifb.edu.br/planaltina/cursos"
        })
    }
    else if(codigo == 'CTAG'){
        res.json({
            "Nome Campus": "Taguatinga",
            "Url Base": "https://www.ifb.edu.br/taguatinga",
            "Url Cursos": "https://www.ifb.edu.br/taguatinga/cursos"
        })
    }
    else {
        res.json({"Error":"CÓDIGO DESCONHECIDO"})
    }
})


app.listen(3000, function () {
    console.log('Inicialização OK!');
})