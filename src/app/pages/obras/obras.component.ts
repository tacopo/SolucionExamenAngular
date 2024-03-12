import { Component } from '@angular/core';
import {TarjetaComponent} from "../../componentes/tarjeta/tarjeta.component";

@Component({
  selector: 'app-obras',
  standalone: true,
  imports: [
    TarjetaComponent
  ],
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.scss'
})
export class ObrasComponent {
  obras=[{
    nombreObra: "Las Meninas",
    autor: "Diego Velázquez",
    año: 1656,
    descripcioncorta: "Pintura de gran tamaño que representa a la infanta Margarita y su corte, con una destacada reflexión sobre la naturaleza del arte y la realidad.",
    rutaImg: "meninas"
  },
{
  nombreObra: "El Jardín de las Delicias",
  autor: "El Bosco",
  año: "1490 - 1510",
  descripcioncorta: "Tríptico que representa una visión surrealista del paraíso, la tierra y el infierno, lleno de simbolismo y detalles intrigantes.",
  rutaImg: "jardinDelicias"
},
{
  nombreObra: "El 3 de mayo de 1808 en Madrid",
    autor: "Francisco de Goya",
  año: 1814,
  descripcioncorta: "Pintura que muestra la brutalidad de la represión francesa durante la Guerra de la Independencia Española, con un enfoque en el sacrificio del pueblo español.",
  rutaImg: "3Mayo"
},
{
  nombreObra: "La Maja Desnuda",
    autor: "Francisco de Goya",
  año: "1797 - 1800",
  descripcioncorta: "Pintura que representa a una mujer desnuda recostada sobre un diván, una de las obras más icónicas de Goya.",
  rutaImg: "majadesnuda"
},
{
  nombreObra: "El caballero de la mano en el pecho",
    autor: "El Greco",
  año: "1580 - 1585",
  descripcioncorta: "Retrato de un caballero en actitud de oración, con una intensa expresión facial y un dramatismo característico del estilo de El Greco.",
  rutaImg: "caballeroMano"
},
{
  nombreObra: "El quitasol",
    autor: "Francisco de Goya",
  año: "1777",
  descripcioncorta: "Pintura que muestra a una mujer y dos niños en un paisaje campestre, con un quitasol como elemento central.",
  rutaImg: "quitasol"
},
{
  nombreObra: "La rendición de Breda",
    autor: "Diego Velázquez",
  año: 1634,
  descripcioncorta: "Pintura que representa la rendición de las tropas holandesas ante el general español Ambrosio Spínola, destacando la humanidad y la dignidad en la guerra.",
  rutaImg: "rendicion"
},
{
  nombreObra: "El sueño de la razón produce monstruos",
    autor: "Francisco de Goya",
  año: "1797 - 1799",
  descripcioncorta: "Grabado que forma parte de la serie 'Los Caprichos', mostrando una escena de pesadilla con animales fantásticos.",
  rutaImg: "suenioRazon"
},
{
  nombreObra: "Saturno devorando a su hijo",
    autor: "Francisco de Goya",
  año: "1819 - 1823",
  descripcioncorta: "Pintura que muestra el mito de Saturno (Cronos) devorando a uno de sus hijos, una obra de gran fuerza y dramatismo.",
  rutaImg: "saturno"
},
{
  nombreObra: "La fragua de Vulcano",
    autor: "Diego Velázquez",
  año: "1630",
  descripcioncorta: "Pintura que representa la fragua del dios Vulcano (Hefesto) en la mitología romana (griega), con una destacada maestría en la representación del movimiento y la luz.",
  rutaImg: "fragua"
},
{
  nombreObra: "La bacanal de los andrios",
    autor: "Tiziano",
  año: "1523 - 1526",
  descripcioncorta: "Pintura que representa una escena mitológica de bacanal, con figuras desnudas y un paisaje exuberante.",
  rutaImg: "bacanal"
},
{
  nombreObra: "El descendimiento",
    autor: "Rogier van der Weyden",
  año: "1435",
  descripcioncorta: "Pintura que representa el descenso de Cristo de la cruz, con una composición emotiva y detallada.",
  rutaImg: "descendimiento"
},
{
  nombreObra: "La anunciación",
    autor: "Fra Angelico",
  año: "1438 - 1447",
  descripcioncorta: "Pintura que representa el momento en que el ángel Gabriel anuncia a la Virgen María que dará a luz a Jesús.",
  rutaImg: "anunciación"
},
{
  nombreObra: "Las tres gracias",
    autor: "Peter Paul Rubens",
  año: "1639 - 1640",
  descripcioncorta: "Pintura que representa a las tres gracias, diosas de la mitología griega que personifican la gracia, la belleza y la alegría.",
  rutaImg: "gracias"
},
{
  nombreObra: "La rendición de Granada",
    autor: "Francisco Pradilla",
  año: 1882,
  descripcioncorta: "Pintura que representa la rendición de Granada a los Reyes Católicos en 1492, un momento clave en la historia de España.",
  rutaImg: "rendicionGranada"
},
{
  nombreObra: "El rapto de Europa",
    autor: "Tiziano",
  año: "1562",
  descripcioncorta: "Pintura que representa el mito del rapto de Europa por Zeus (Júpiter) transformado en toro blanco.",
  rutaImg: "raptoEuropa"
},
{
  nombreObra: "Retrato de Isabel de Valois",
    autor: "Peter Paul Rubens",
  año: "1605",
  descripcioncorta: "Retrato de Isabel de Valois, reina consorte de Felipe II de España, pintado durante su estancia en la corte española.",
  rutaImg: "retratoIsabel"
},
{
  nombreObra: "Carlos V en la batalla de Mühlberg",
    autor: "Tiziano",
  año: "1548",
  descripcioncorta: "Pintura que representa al emperador Carlos V en la batalla de Mühlberg, una de sus victorias más importantes.",
  rutaImg: "CarlosV"
},
{
  nombreObra: "La Inmaculada Concepción",
    autor: "Bartolomé Esteban Murillo",
  año: "1660 - 1665",
  descripcioncorta: "Pintura que representa a la Virgen María como la Inmaculada Concepción, rodeada de ángeles.",
  rutaImg: "Inmaculada"
},
{
  nombreObra: "El cardenal",
    autor: "Rafael",
  año: "1510",
  descripcioncorta: "Retrato del cardenal Tommaso Inghirami, amigo y mecenas del artista Rafael.",
  rutaImg: "cardenal"
},
{
  nombreObra: "El entierro del Conde de Orgaz",
    autor: "El Greco",
  año: "1586",
  descripcioncorta: "Pintura que representa el milagro del entierro del Conde de Orgaz, con una mezcla de lo terrenal y lo divino.",
  rutaImg: "entierroOrgaz"
},
{
  nombreObra: "La resurrección de Cristo",
    autor: "El Greco",
  año: "1597 - 1600",
  descripcioncorta: "Pintura que representa la resurrección de Cristo, con una composición dinámica y un uso magistral del color.",
  rutaImg: "resurreccionGreco"
},
{
  nombreObra: "Las hilanderas",
    autor: "Diego Velázquez",
  año: "1657",
  descripcioncorta: "Pintura que representa a varias mujeres hilando lana, con una narrativa que fusiona la mitología y la vida cotidiana.",
  rutaImg: "hilanderas"
},
{
  nombreObra: "El perro semihundido",
    autor: "Francisco de Goya",
  año: "1819 - 1823",
  descripcioncorta: "Pintura que muestra a un perro luchando por mantenerse a flote en un mar tormentoso, simbolizando la lucha contra la adversidad.",
  rutaImg: "perroSemi"
},
{
  nombreObra: "La fuente de la Gracia",
    autor: "Peter Paul Rubens",
  año: "1615",
  descripcioncorta: "Pintura que representa a la Virgen María como la fuente de la gracia divina, con una composición dinámica y llena de movimiento.",
  rutaImg: "fuenteGracia"
},
{
  nombreObra: "La anunciación",
    autor: "El Greco",
  año: "1596",
  descripcioncorta: "Pintura que representa el momento en que el ángel Gabriel anuncia a la Virgen María que dará a luz a Jesús, con un estilo único y expresivo característico de El Greco.",
  rutaImg: "anunciacionGreco"
},
{
  nombreObra: "Retrato de Felipe IV",
    autor: "Diego Velázquez",
  año: "1656",
  descripcioncorta: "Retrato del rey Felipe IV de España, pintado con un realismo impresionante que captura la personalidad del monarca.",
  rutaImg: "felipeIVVelazquez"
},
{
  nombreObra: "La Inmaculada Concepción",
    autor: "Diego Velázquez",
  año: "1619 - 1620",
  descripcioncorta: "Pintura que representa a la Virgen María como la Inmaculada Concepción, rodeada de ángeles y con una expresión serena y celestial.",
  rutaImg: "inmaculadaVelazquez"
},
{
  nombreObra: "La familia de Carlos IV",
    autor: "Francisco de Goya",
  año: "1800",
  descripcioncorta: "Pintura que representa a la familia real española de Carlos IV, con una visión crítica y satírica de la monarquía.",
  rutaImg: "familiaCarlos"
},
{
  nombreObra: "El aguador de Sevilla",
    autor: "Diego Velázquez",
  año: "1620",
  descripcioncorta: "Pintura que representa a un aguador de Sevilla, con una composición naturalista y un uso magistral de la luz y el color.",
  rutaImg: "aguadorSevilla"
},
{
  nombreObra: "La Venus del espejo",
    autor: "Diego Velázquez",
  año: "1647 - 1651",
  descripcioncorta: "Pintura que representa a Venus (Afrodita) mirándose en un espejo sostenido por su hijo Cupido, con un realismo impresionante y una sensualidad cautivadora.",
  rutaImg: "venusEspejo"
},
{
  nombreObra: "La coronación de la Virgen",
    autor: "Fra Angelico",
  año: "1434 - 1435",
  descripcioncorta: "Pintura que representa la coronación de la Virgen María por la Santísima Trinidad, rodeada de ángeles y santos.",
  rutaImg: "coronacionVirgen"
}
]

  constructor() {

  }


}
