import imagen1 from "../files/Mapa_edificio1.PNG";
import image2 from "../files/2017_TM.png";
import imagen3 from "../files/ROMA_IN_7.jpg";
const Productos = [
    {
    image: imagen1,
    review:
      "Producto patrimonio AMDC levantamiento y generacion de predios de areas verdes, edificios historicos.",
    name: 'Edificios historicos plano',
    status : 'Catastro'
    },
    {
    image: image2,
    review:
    "Mapa de temperatura maxima considerando la elevacion usando como referencia un DEM para considerar como aumenta la temperatura con la altitud",
    name:'Mapa de temperatura maxima',
    status:'Geoestadistica'
    },
    {
    image: imagen3,
    review:
          "Dashboard medicion de datos en tiempo real de las estaciones hidrometeoroligicas en la zona valle de sula",
    name: 'Dashboard ROMA-IN',
    status : 'Gestion de riesgos'
    }
]

export default Productos;