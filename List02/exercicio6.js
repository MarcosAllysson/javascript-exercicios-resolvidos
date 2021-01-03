function calcularArea(raio){ return raio; }

//(A = π r²)
let areaCirculo;
let area = calcularArea(parseInt (process.argv[2]));
if (area === 0){ console.log('Área do círculo: 0'); }
else {
    areaCirculo = Math.PI * area * area;
    console.log('Área: ' + areaCirculo);
}