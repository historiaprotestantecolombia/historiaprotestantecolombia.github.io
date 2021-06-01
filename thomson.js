//var mymap = L.map('mapid').setView([-2.180486, -79.8764937], 6);

//var lugares = L.layerGroup();


//Lugares sobre los que se puede interactuar con popup

var Convento = L.marker([-0.2198965, -78.5173224]).bindPopup('Convento, CO.'),
  Manuel = L.marker([-0.208751, -78.502700]).bindPopup('This Manuel, CO.');

var lugares = L.layerGroup([Convento, Manuel]); //Agrupa los lugares


//Configuración de los mapas base
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2lsbWVyb2RyaWd1ZXoiLCJhIjoiY2tnbWZid3RuMm53NDJ4bDcxdjc4dmI4ZiJ9.1aBHLoxNVF4YAkVolAwX_w';


var satelite = L.tileLayer(mbUrl, {
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
  }),
  calles = L.tileLayer(mbUrl, {
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
  }),
  iluminado = L.tileLayer(mbUrl, {
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mbAttr
  });
//oscuro  = L.tileLayer(mbUrl, {id: 'mapbox/dark-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
//afueras  = L.tileLayer(mbUrl, {id: 'mapbox/outdoors-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
var sateliteCalles = L.tileLayer(mbUrl, {
  id: 'mapbox/satellite-streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr
});
//newGranada1819 = L.tileLayer(warperNewGranada1819, {tileSize: 512, zoomOffset: -1, attribution: mbAttr});

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  maxZoom: 20,
  ext: 'jpg'
});

var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  ext: 'png'
});

var Thunderforest_Pioneer = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  apikey: 'a9eeed1a20094556bdee314073d7f51c',
  maxZoom: 22
});


/*
var satelite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2lsbWVyb2RyaWd1ZXoiLCJhIjoiY2tnbWZid3RuMm53NDJ4bDcxdjc4dmI4ZiJ9.1aBHLoxNVF4YAkVolAwX_w'
}),

    calles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2lsbWVyb2RyaWd1ZXoiLCJhIjoiY2tnbWZid3RuMm53NDJ4bDcxdjc4dmI4ZiJ9.1aBHLoxNVF4YAkVolAwX_w'
});
*/

//Creación del espacio para los mapas base con parámetros iniciales de lat y long, zoom y capas a usar
var mymap = L.map('mapid', {
  center: [-3.180486, -75.8764937],
  zoom: 6,
  layers: Thunderforest_Pioneer,
  fadeAnimation: true,
});




// Creación de paneles y mapas antiguos para luego superponerlos en el efecto de opacidad (mapa antiguo sobre el mapa base)

// Mapa de Nueva Granada em 1819
mymap.createPane('mapa1819');
mymap.getPane('mapa1819').style.zIndex = 300; //Coloca el mapa antiguo sobre todas las capas

var newGranada1819 = L.tileLayer('https://mapwarper.net/maps/tile/54835/{z}/{x}/{y}.png', {
  pane: 'mapa1819',
  tileSize: 512,
  zoomOffset: -1,
  attribution: 'map warper'
});

//Mapa de la Carta de Colombia en 1827
mymap.createPane('mapa1827');
mymap.getPane('mapa1827').style.zIndex = 299;

var colombia1827 = L.tileLayer('https://mapwarper.net/maps/tile/55558/{z}/{x}/{y}.png', {
  pane: 'mapa1827',
  tileSize: 512,
  detectRetina: true,
  zoomOffset: -1,
  attribution: 'map warper'
});


colombia1827.addTo(mymap); // Iniciar por defecto con Mapa Histórico de Colombia en 1827


//Función para cambiar los mapas superpuestos
function superPonerMapa() {
  var leerValorMapa = document.getElementById("mapas").value;

  if (leerValorMapa === "colombia1819") {
    colombia1827.remove();
    newGranada1819.addTo(mymap);
  }
  if (leerValorMapa === "colombia1827") {
    newGranada1819.remove();
    colombia1827.addTo(mymap);
  }

}




// Mapas base para seleccionar

var baseMaps = {

  "Mate &nbsp;&nbsp;&nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/Thunderforest_pioneer.png' alt='Mapa de terreno' width='70px' height='50px'></div>": Thunderforest_Pioneer,
  "Agua &nbsp;&nbsp;&nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/Stamen_watercolor.png' alt='Mapa Color de Agua' width='70px' height='50px'></div>": Stamen_Watercolor,
  "Terreno <div class='mapa-imagenes-selector'><img src='Imagenes/Stamen_terrain.png' alt='Mapa de terreno' width='70px' height='50px'></div>": Stamen_Terrain,
  "Calles &nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/calles.png' alt='Mapa de calles' width='70px' height='50px'></div>": calles,
  "Satelite <div class='mapa-imagenes-selector'><img src='Imagenes/satelite.png' alt='Mapa de satelite' width='70px' height='50px'></div><br>&nbsp;": satelite,
  //"Satelite":satelite,
  //"Calles":calles,
  //"Nueva Granada (1819)" : newGranada1819
};

var overlayMaps = {
  "Lugares": lugares,
};

L.control.layers(baseMaps).addTo(mymap); //Permite el control de cambio de mapas

//var trayecto;

//Creación de círculos para interactuar con lugares en el mapa base

var Guayaquil = L.circle([-2.180486, -79.8764937], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Guayaquil.bindPopup("<div class='textoPopupsMax'><h2>James Diego Thomson</h2> <h3>Inicio de su recorrido por la Gran Colombia</h3> <div class='imagenGeneral'><img src='Imagenes/JamesDiegoThomson.jpeg' alt='Imagen de Thomson' border= '0px solid #555' width='auto' height='auto'></div><br><br><b>Lugar:</b> Guayaquil <br><br> <b>Fecha:</b> 30 de septiembre - 12 de Octubre, 1824 <br><br> <b>Hechos:</b> <br><br> Thomson llegó a Guayaquil el 30 de septiembre de 1824. Había partido desde Lima, Perú el 5 de septiembre por causa de la guerra contra los españoles que se libraba en ese territorio por la independencia, lo cual había obstaculizado su labor misionera. Allí estuvo involucrado en la educación de los jóvenes y en la traducción del Nuevo Testamento a la lengua Quechua para que se leyera entre los pueblos nativos de esa región.<br><br>A su llegada en Guayaquil, en su carta del 5 de octubre de 1824, Thomson le escribió al Rev. Brandram, de la Sociedad Bíblica Británica y Extranjera (BFBS por sus siglas en inglés)<sup>1</sup>, cuál era el propósito de su labor:<blockquote>\"Ya sabes que el único objeto que tengo pensado en América del Sur es el de promover el reino de nuestro Señor Jesucristo. Por supuesto, hay varias formas en que esto se puede hacer, y he pensado que para hacerlo es mejor dejarme guiar por las diversas circunstancias y ocasiones que la providencia de Dios me abra de vez en cuando. Las dos cosas a las que particularmente he prestado más atención todo el tiempo son la educación de la juventud y la circulación de las Sagradas Escrituras\".</blockquote><br>En esta carta se puede leer también que apoyaba con firmeza la causa independentista, pues relata con agrado cómo el ejército Patriota liderado por Bolívar venció a los españoles en una batalla en Junín el 6 de agosto y luego venció en otras provincias. Escribió que esto era un fuerte golpe para la causa española y que:<blockquote>\"Con esta causa terminará, confío, el reinado de opresión y violencia, de ignorancia y fanatismo en Perú, por el cual se ha oprimido durante trescientos años. Que así perezca toda la ignorancia y tiranía de la tierra!... Creo firmemente que la liberación de este país de la esclavitud y la opresión, y la emancipación mental de sus habitantes, dependen del éxito de esta revolución; como la liberación de los judíos luego de la conquista de Babilonia, y la posesión de la tierra de Canaán por el pueblo de Dios sobre sus enemigos. Los españoles, como se sabe bien, han impedido enormemente, por no decir prohibido, el progreso del conocimiento y de la verdadera religión en América. Por eso no es sencillo, ni tampoco apropiado, permanecer indiferente al asunto de esta lucha\".</blockquote><br>En Guayaquil, Thomson imprimió avisos en los que se anunciaba la venta de Nuevos Testamentos en varios lugares públicos. El interés de las personas por este libro se hizo evidente y terminó distribuyendo 738 copias del Nuevo Testamento. Cada copia se vendía a 1 dolar, o también a 8 reales, o un poco menos a veces. Era la primera vez que tanto personas comunes del pueblo como importantes en la política e incluso del clero leían el Nuevo Testamento en español. Thomson nota el interés que se sucitó en la lectura de estas Escrituras:<blockquote>\"Te aseguro que fue gratificante ver casi toda la ciudad juntarse para oir la palabra de Dios, y  aún más, pasar a lo largo de las calles y contar a uno, dos, tres, una docena quizás, ocupados diligentemente en la lectura de sus Nuevos Testamentos. ¿Quién en estas circunstancias podría estar en un estado diferente al de acción de gracias y oración?–acción de gracias a Dios por haber dispuesto a tantos en ocuparse de las cosas que pertenecen a su eterna paz, lo cual, me atrevo a decir,  había estado oculto de sus ojos hasta ahora– y oración, para que los ojos de su entendiemiento sean iluminados, para que se puedan volver de las tinieblas a la luz, y disfrutar la herencia que el Señor ha preparado para los que le aman\".</blockquote><br>El impacto de la lectura del Nuevo Testamento no fue menor en varios personajes del clero católico, Thomson relata:<blockquote>\"...varios sacerdotes y frailes compraron Nuevos Testamentos. En una ocasión, pienso que habían al tiempo cinco frailes en la tienda para comprar, y uno de ellos tomó trece copias. En otra ocasión, un fraile, que había comprado un Nuevo Testamento, vino luego con mucha ansiedad preguntando por la Biblia entera... Esta persona me dijo que todos los frailes en su convento habían comprado Nuevos Testamentos, y que todos estaban muy complacidos con ellos\".</blockquote><br> La versión del Nuevo Testamento que Thomson distribuía era una versión autorizada por la Iglesia Católica que había sido traducida por el obispo español Felipe Scio de San Miguel a finales del siglo XVIII. Las copias que distribuía solo contenían los textos del Nuevo Testamento traducidos al español sin notas ni comentarios adicionales. Puedes consultar esta versión haciendo clic en la siguiente imagen.<br><br><a href='https://archive.org/details/elnuevotestament00scio/page/n3/mode/2up' target='_blank'><img title='Ver Nuevo Testamento de Scio en línea' src='Imagenes/NuevoTestamentoScio.png' border= '2px solid #555' alt='Imagen del Nuevo Testamento de Scio' width='95%' height='auto'></a><br><br>Con esta versión del Nuevo Testamento, Thomson fue llevando a cabo su labor de hacer circular las Escrituras con la esperanza de que \"Aquél que causa que la lluvia descienda del cielo para fertilizar el suelo, y que se produzca fruto de los débiles esfuerzos del hombre, quiera dar su bendición sobre la semilla sembrada en este lugar. Como se siembra en debilidad que se levante en fortaleza, y que produzca al ciento por uno\".<br><br><br> <b>Fuentes:</b> <br><br> <a href='https://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-5th-october-1824' target='_blank'> Carta del 5 de octubre, 1824</a> <br><br> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-11th-october-1824' target='_blank'> Carta del 11 de octubre, 1824</a><br><br>1. Esta sociedad fue fundada el 7 de marzo de 1804. En 1817, un poco antes de que Thomson iniciara su viaje por Suramérica en 1818, la BFBS había acumulado la cantidad de 816,278 Biblias y 986,883 Nuevos Testamentos en 18 idiomas diferentes, la mayoría en el idioma inglés. Willliam Canton, <i>A History of the British and Foreign Bible Society</i>, Vol. I (Londres: John Murray, Albemarle Street, W. 1904),103.<a href='https://archive.org/details/cu31924092358260/mode/2up' target='_blank'> Ver libro en línea</a>. </div>");

Guayaquil.bindTooltip("Guayaquil");

// Activa el popup para un evento en la línea de tiempo
var guayaquilLinea = document.getElementById('Guayaquil');
guayaquilLinea.addEventListener('click', guayaquilEvento, false);

function guayaquilEvento(event) {
  Guayaquil.openPopup();
}

//L.circleMarker([-4.959213,-84.716197], { color: 'black', radius: 10}).addTo(mymap);


var rioGuayaquilBabahoyo = L.circle([-1.959213, -79.716197], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

rioGuayaquilBabahoyo.bindPopup("<div class='textoPopupsMax'> <b>Lugar:</b> Río Guayaquil-Babahoyo <br><br> <b>Fecha:</b> Octubre, 1824 <br><br> <b>Hechos:</b> <br><br>Thomson partió de Guayaquil hacia Babahoyo en un viaje por río a bordo de una canoa. Debido a que el capitán de la canoa y otro pasajero tenían una copia del Nuevo Testamento, lo estuvieron leyendo en voz alta durante el trayecto. Esto dio lugar a varias conversaciones. <br><br> <div class='imagenGeneral'> <img src='Imagenes/canoa.png' alt='Imagen de canoa' border= '5px solid #555' width='90%' height='auto'> </div> Ejemplo de viaje en canoa. Imagen tomada del libro <i>Hacia el Ecuador.</i><sup>1</sup><br><br> Entre las conversaciones que tomaron lugar, Thomson resalta una que consideró como muestra del progreso en el pensamiento sobre cuestiones religiosas gracias a la lectura del Nuevo Testamento. El tema de la conversación fue la adoración a los santos y en ella participaron el capitán de la canoa y otros tres pasajeros. Thomson les refirió unos pasajes del Nuevo Testamento para explicar que no tenía sentido adorar a los santos, lo cual fue suficiente para aclarar el tema para todos excepto para uno, quien se opuso al razonamiento presentado. El siguiente audio es una recreación de lo descrito por Thomson.<br><br><audio controls><source src='audio/conversacionRio.mp3' type='audio/mpeg'> La versión del explorador no permite la reproducción del audio </audio><br><br> Luego, una de las pasajeras le comentó a Thomson que no le había gustado esta conversación porque eso significaría que tampoco tendría sentido orar a la Virgen María. Thomson le dijo que la deducción era correcta y le sugirió que hiciera esa pregunta a uno de los que había participado en la conversación. Al hacerlo, la respuesta que obtuvo fue tal que Thomson mencionó que hubiera respondido de la misma manera. Thomson relata que más cosas se dijeron, entre las cuales el Nuevo Testamento fue alabado como un libro que se podía leer y entender, no como las oraciones de los sacerdotes, seguramente porque eran en latín. <br><br> Thomson se sintió sorprendido al escuchar estas opiniones de personas que eran de la clase baja, pues ese tipo de opinión liberal solo lo había oido en las clases altas e ilustradas, de modo que esa experiencia fue nueva e interesante para él. Todo esto evidencia el impacto que empezó a tener en la fe de las personas la simple lectura de las páginas del Nuevo Testamento en su propio idioma.<br><br> <b>Fuentes:</b><br><br> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guaranda-25th-october-1824' target='_blank'> Carta del 25 de octubre, 1824</a> <br><br>1. Kolberg, Joseph. Hacia el Ecuador: relatos de viajes (2a ed.). Editorial Abya-Yala, 2015. </div> ");

rioGuayaquilBabahoyo.bindTooltip("Trayecto de río: Guayaquil a Babahoyo");

// Activa el popup para un evento en la línea de tiempo
var rioGuayaquilBabahoyoLinea = document.getElementById('rioGuayaquilBabahoyo');
rioGuayaquilBabahoyoLinea.addEventListener('click', rioGuayaquilBabahoyoEvento, false);

function rioGuayaquilBabahoyoEvento(event) {
  rioGuayaquilBabahoyo.openPopup();
}

var Babahoyo = L.circle([-1.7975716, -79.5371457], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Babahoyo.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Babahoyo <br><br> <b>Fecha:</b> 15 al 19 de octubre, 1824 <br><br> <b>Hechos:</b> <br><br> Al llegar a Babahoyo, uno de los pasajeros llevó a Thomson a la casa de su padre para reposar, pues los hospedajes estaban llenos. Luego, continuó su viaje en mula para ascender la montaña rumbo a Quito. En Babahoyo, Thomson distribuyó 51 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <br><br><a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guaranda-25th-october-1824' target='_blank'> Carta del 25 de octubre, 1824</a></div>");

Babahoyo.bindTooltip("Babahoyo");

// Activa el popup para un evento en la línea de tiempo
var babahoyoLinea = document.getElementById('Babahoyo');
babahoyoLinea.addEventListener('click', babahoyoEvento, false);



function babahoyoEvento(event) {
  Babahoyo.openPopup();
}


var Guaranda = L.circle([-1.5921547, -79.0021442], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Guaranda.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Guaranda <br><br> <b>Fecha:</b> 25 al 29 de octubre, 1824 <br><br> <b>Hechos:</b> <br><br> Thomson menciona que al llegar a Guaranda se contactó con el gobernador, y al ver que era un hombre de confianza y preocupado por instruir a sus compatriotas, le comentó sobre toda su labor y sobre el propósito de la BFBS en la distribución de copias del Nuevo Testamento. El gobernador se interesó y compró una copia, al igual que otros que estaban con él. Sin embargo, en este lugar solo logró distribuir 13 copias del Nuevo Testamento, pues comenta que la mayoría de la población, que era de unos 1500 habitantes, no hablaba español. <br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/riobamba-31st-october-1824' target='_blank'> Carta del 31 de octubre, 1824</a></div>");

Guaranda.bindTooltip("Guaranda");

// Activa el popup para un evento en la línea de tiempo
var GuarandaLinea = document.getElementById('Guaranda');
GuarandaLinea.addEventListener('click', GuarandaEvento, false);

function GuarandaEvento(event) {
  Guaranda.openPopup();
}

var Riobamba = L.circle([-1.6728729, -78.6489698], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Riobamba.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Riobamba <br><br> <b>Fecha:</b> 30 al 31 de octubre, 1824 <br><br> <b>Hechos:</b> <br><br> En Riobamba, Thomson se contactó con el gobernador del pueblo y, al igual que con el gobernador de Guaranda, observó una actitud favorable con respecto a su labor en la distribución del Nuevo Testamento. En este lugar logró vender 35 copias, pero como su estadía fue corta, le dejó 50 copias más al gobernador para que se vendieran luego, y dejó otras 50 más para que fueran enviadas al gobernador de Guaranda y dispusiera de las mismas como hubiere necesidad.<br><br>Thomson menciona que su estrategia era establecer contactos con personas de influencia y del clero para que luego se pudieran seguir distribuyendo copias del Nuevo Testamento. Escribió que en Riobamba la población era de 3000 habitantes, y como observó que en toda esa región una gran cantidad de la población era nativa, estaba planeando que sus contactos distribuyeran las copias del Nuevo Testamento en la lengua Quechua una vez estuvieran impresas por la BFBS; este Nuevo Testamento lo estuvo preparando con un equipo de traductores durante su estadía en Perú, pero aún no se habían hecho copias impresas. También, persuadía a sus contactos sobre la importancia y practicidad de educar a la población nativa, y de que las Escrituras eran muy útiles para esta labor educativa.<br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/riobamba-31st-october-1824' target='_blank'> Carta del 31 de octubre, 1824</a></div>");

Riobamba.bindTooltip("Riobamba");

// Activa el popup para un evento en la línea de tiempo
var RiobambaLinea = document.getElementById('Riobamba');
RiobambaLinea.addEventListener('click', RiobambaEvento, false);

function RiobambaEvento(event) {
  Riobamba.openPopup();
}

var Ambato = L.circle([-1.2426281, -78.6277928], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Ambato.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Ambato <br><br> <b>Fecha:</b> 1 al 3 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br><br>Al igual que en Guaranda y Riobamba, Thomson encontró favorabilidad con el gobernador de Ambato, el Coronel Nicolás Báscones. El gobernador le ofreció su casa para hospedarse y también para que fuera usada como punto de venta de las copias del Nuevo Testamento, incluso él y su esposa le ayudaron a Thomson a vender los ejemplares. Thomson estaba preparando el camino para que estos lugares se convirtieran en sociedades auxiliares de una sociedad bíblica nacional que ya había estado pensando en establecer una vez llegara a la ciudad de Bogotá. <br><br>En Ambato, con una población de unos 5000 habitantes, Thomson logró vender 47 copias del Nuevo Testamento, entre los compradores hubo varios clérigos y también el rector del pueblo (el rector era un título que se le daba a un líder de alguna institución eclesiástica católica). A lo largo de sus viajes, a Thomson también la habían estado solicitando la Biblia entera traducida, pero él solo llevaba una para mostrar, por lo que se lamentaba de esta situación, aunque estaba pendiente de la llegada de 200 Biblias por parte de la BFBS para poder disponer de ellas. El rector de Ambaro mostró un gran interés e insistencia en comprar la Biblia que Thomson llevaba consigo, pero Thomson no pudo vendérsela en esa ocasión, pues era la única que tenía para mostrar en su recorrido, aunque le prometió enviársela luego cuando tuviera disponibilidad de más copias.<br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a></div>");

Ambato.bindTooltip("Ambato");

// Activa el popup para un evento en la línea de tiempo
var AmbatoLinea = document.getElementById('Ambato');
AmbatoLinea.addEventListener('click', AmbatoEvento, false);

function AmbatoEvento(event) {
  Ambato.openPopup();
}

var Latacunga = L.circle([-0.9343056, -78.6171347], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Latacunga.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Latacunga <br><br> <b>Fecha:</b> 4 al 6 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br><br>De camino hacia Latacunga, Thomson se encontró con un fraile durante el camino con igual destino, el cual lo invitó a hospedarse en el convento de Santo Domingo de aquél lugar. Thomson no tenía pensado detenerse en Latacunga, pero luego de unos percances terminó hospedándose en el convento. Luego de acomodarse en su habitación, Thomson estuvo pensando, indeciso, si debía vender copias del Nuevo Testamento en el convento, pues no sabía si encontraría una disposicón favorable. Finalmente, se decidió y le llevó una copia al Prior del convento para mostrársela, al tiempo que oraba para que Dios abriera el camino para la circulación de su palabra. Su oración fue escuchada y el Prior no solo compró una copia, sino que la recomendó a los otros clérigos y además ofreció el convento como lugar de venta. Tan pronto pusieron los avisos de la venta, varias personas llegaron para comprar sus copias del Nuevo Testamento, y durante las dos horas y media que siguieron antes de que cayera la noche,  Thomson y los frailes del convento que le ayudaron lograron vender 104 copias. <br><br> Al mostrar el ejemplar de la Biblia que Thomson llevaba consigo, muchos mostraron interés en comprarla, pero no podía venderla por ser la única que tenía, sin embargo, les prometió que en unos meses llegarían biblias para que dispusieran de ellas.  Al ver que nadie podía comprarse una copia para sí mismo, y con el deseo de saber su contenido, se terminó formando un círculo alrededor de un fraile que la estuvo leyendo en voz alta por un tiempo considerable. Incluso, el Prior del convento se ofreció para colaborar con la BFBS en la labor de la distribución de biblias. Tal era el interés y la curiosidad de los que nunca habían leído este libro en su propio idioma. Thomson se fue a dormir meditando en todo lo que había ocurrido y agradeciendo a la providencia divina por llevarlo a ese lugar.<br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a></div>");

Latacunga.bindTooltip("Latacunga");

// Activa el popup para un evento en la línea de tiempo
var LatacungaLinea = document.getElementById('Latacunga');
LatacungaLinea.addEventListener('click', LatacungaEvento, false);

function LatacungaEvento(event) {
  Latacunga.openPopup();
}

var Quito = L.circle([-0.22151199118554876, -78.5127311067427], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 25000
}).addTo(mymap);

Quito.bindPopup("<div class='textoPopupsMax'> <b>Lugar:</b> Quito <br><br> <b>Fecha:</b> 7 al 26 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br><br>Al llegar a la ciudad de Quito, Thomson encontró un gran interés en el pueblo de adquirir las copias del Nuevo Testamento y de la Biblia. Al parecer, su labor en la distribución de las Escrituras había ido tomando buena fama y las personas en Quito ya estaban deseando leer tan preciado libro, pues menciona que al llegar a la ciudad recibió muchas solicitudes. Desde Guaranda, Thomson había enviado las copias directo a Quito mientras pasaba por Riobamba, pero éstas aún no habían llegado. Luego de que llegara una parte del cargamento de copias, pudo vender rápidamente 137 copias del Nuevo Testamento, y nuevamente tuvo que esperar a que llegara el resto para atender todas las solicitudes que le llegaban. Tan pronto como llegó todo el cargamento, un respetado clérigo se llevó 80 copias, de las cuales 50 se usarían en las escuelas, pues fueron financiadas por el gobierno. Otras 25 copias fueron compradas por solicitud del Provincial del Convento de San Francisco, pues quería que cada fraile tuviera una. Las otras 5 fueron vendidas a amistades particulares. En total, terminó distribuyendo 360 copias en esta ciudad de unos 50 000 habitantes para la época. A medida que vendía estas copias, también le solicitaban mucho la Biblia entera, para lo cual hizo arreglos de que se repartieran 50 copias entre las ciudades que había visitado, una vez llegaran a Guayaquil desde Lima. Todo esto muestra que, en general, la demanda por las Escrituras era alta, pero la oferta poca.<br><br>Mientras Thomson continuaba haciendo arreglos para distribuir los próximos cargamentos de Biblias que llegarían por parte de la BFBS, seguía haciendo amistades con personajes claves en cada ciudad para que a futuro su labor continuara y las Escrituras fueran llegando a más y más personas según la demanda lo requiriera. En Quito, se relacionó con el Marqués de San José, el cual le ofreció su casa para la venta de copias del Nuevo Testamento, al tiempo que las promocionaba entre sus amistades. El Marquesado de San José era un título español de la época, por lo que sus influencias eran de gran provecho para la circulación de los textos. De hecho, Thomson menciona que el Marqués de San José, el Sr. Manuel de Larrea,  estuvo muy dispuesto a la idea de crear una sociedad bíblica en Quito, y no solo él, la Marquesa también mostró respaldo absoluto en la posibilidad de crear una sociedad bíblica femenina. Igualmente, otros caballeros le hicieron saber a Thomson que apoyarían la creación de una sociedad bíblica, lo cual le alegraba, pues esto podría beneficiar en gran manera a esta población. <br><br> <br><br> Thomson relata que también llevaba dos copias en español de un libro llamado <i>Evidences of Christianity</i> (Evidencias del Cristianismo), y que le vendió una al Sr. Manuel de Larrea, quien lo leyó con entusiasmo y se lo prestó a varios de sus amigos. La obra fue bien recibida, pues se resolvió imprimir copias por susbscripción, con el dato curioso de que la subscripción era solo de mujeres. Thomson consideraba que este tipo de obras en defensa del Cristianismo eran muy provechosas para Suramérica, pues había visto a muchos encaminándose hacia el deismo, el cual es una corriente filosófica que considera a Dios alejado de los asuntos humanos, algo que no es compatible con las enseñanzas cristianas en donde se afirma que Dios se involucra con la vida humana. Thomson consideró que obras como ésta ayudarían a muchos a encontrar la verdad enseñada en las Sagradas Escrituras. Aunque Thomson no nombra al autor del libro, seguramente se estaba refiriendo a la célebre obra de entonces del teólogo y filósofo William Paley que fue escrita 1794, y luego traducida al español en 1824. En la siguiente imagen se puede acceder a dicha obra en línea.<br><br><a href='https://archive.org/details/evidenciasdelcri0000pale/page/n3/mode/2up' target='_blank'><img title='Ver libro en línea' src='Imagenes/evidenciasCristianismo.png' border= '2px solid #555' alt='Imagen de libro' width='95%' height='auto'></a><br><br> También, Thomson entrega otras dos obras literarias de importancia en el Reino Unido por aquella época a un clérigo profesor de una universidad en Quito que entendía el inglés. En las siguientes imágenes se pueden consultar dichas obras en línea. <br><br> <h3>Biblical Cyclopedia or dictionary of Holy Scriptures por William Jones (Escritor bautista galés)</h3> <br><br><a href='https://play.google.com/store/books/details?id=g0m3p2tphzoC&rdid=book-g0m3p2tphzoC&rdot=1' target='_blank'><img title='Ver libro en línea' src='Imagenes/Biblical.png' border= '2px solid #555' alt='Imagen del libro' width='95%' height='auto'></a> <br><br> <h3>Elements of the philosophy of the human mind por Dugald Stewart </h3> <a href='https://archive.org/details/b28041598' target='_blank'><img title='Ver libro en línea' src='Imagenes/ElementsPhilosophy.png' border= '2px solid #555' alt='Imagen del libro' width='95%' height='auto'></a> <br><br> <b>Fuentes:</b> <br><br><a href='http://www.jamesdiegothomson.com/blog/2013/12/25/quito-19th-november-1824' target='_blank'> Carta del 19 de noviembre, 1824</a><br><br><a href='http://www.jamesdiegothomson.com/blog/2013/12/25/quito-24th-november-1824' target='_blank'> Carta del 24 de noviembre, 1824</a> <br> </div>");


Quito.bindTooltip("Quito");

// Activa el popup para un evento en la línea de tiempo
var QuitoLinea = document.getElementById('Quito');
QuitoLinea.addEventListener('click', QuitoEvento, false);

function QuitoEvento(event) {
  Quito.openPopup();
}

var Otavalo = L.circle([0.225793, -78.263709], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Otavalo.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Otavalo <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br><br> Thomson partió desde Quito con rumbo a Popayán pasando por varios pueblos. Durante el recorrido puede contemplar la belleza natural de la Cordillera de los Andes y hace una descripción corta sobre el clima y la geografía del lugar, pero no escribe mucho sobre lo que sucedió en cada pueblo. En Otavalo distribuye 13 copias del Nuevo Testamento. <br><br> <b>Fuentes:</b> <br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/popayan-1st-january-1825' target='_blank'> Carta del 1 de enero, 1825</a></div>");

Otavalo.bindTooltip("Otavalo");

// Activa el popup para un evento en la línea de tiempo
var OtavaloLinea = document.getElementById('Otavalo');
OtavaloLinea.addEventListener('click', OtavaloEvento, false);

function OtavaloEvento(event) {
  Otavalo.openPopup();
}

var Ibarra = L.circle([0.351153, -78.118712], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Ibarra.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Ibarra <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br><br> En Ibarra, Thomson vende 22 copias del Nuevo Testamento. <br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-25th-february-1825' target='_blank'> Carta del 25 de febrero, 1825</a></div>");

Ibarra.bindTooltip("Ibarra");

// Activa el popup para un evento en la línea de tiempo
var IbarraLinea = document.getElementById('Ibarra');
IbarraLinea.addEventListener('click', IbarraEvento, false);

function IbarraEvento(event) {
  Ibarra.openPopup();
}

var Tulcan = L.circle([0.814717, -77.715197], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Tulcan.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Tulcán <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br><br> En Tulcán, Thomson solo vende 2 copias del Nuevo Testamento. Thomson menciona que en estos pueblos pequeños por los que pasaba publicó avisos para la distribución de los libros, pero que no hubo una gran venta debido a que, en general, los habitantes eran pobres y a pocos les gustaba la lectura. Aún así consideraba que mucho se hacía con tener algún tipo de comienzo. <br><br> <b>Fuentes:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/bogot-8th-february-1825' target='_blank'> Carta del 8 de febrero, 1825</a><br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-25th-february-1825' target='_blank'> Carta del 25 de febrero, 1825</a></div>");

Tulcan.bindTooltip("Tulcan");

// Activa el popup para un evento en la línea de tiempo
var TulcanLinea = document.getElementById('Tulcan');
TulcanLinea.addEventListener('click', TulcanEvento, false);

function TulcanEvento(event) {
  Tulcan.openPopup();
}

var Pasto = L.circle([1.214373, -77.278468], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Pasto.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Pasto <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br><br> En su paso por Pasto, menciona que era un lugar peligroso, pues habían grupos rebeldes en contra del gobierno, uno de los cuales tenía 100 hombres. Thomson menciona que el gobernador de Pasto les proveyó una guardia militar de 40 hombres, pues la inseguridad era prevalente y recientemente un grupo de bandidos había asesinado a un mercante que viajaba de Popayán hacia Pasto y que tenía una guardia para su defensa de 12 hombres. Debido a esta situación de violencia que se presentaba en Pasto, Thomson menciona que la población se había reducido de 15 000 a unos 4000 habitantes, y que las casas se veían deshabitadas y destruidas. A pesar de todo, Thomson sintió la protección providencial de Dios. En su paso por Pasto logró vender 6 copias del Nuevo Testamento. <br><br> <b>Fuentes:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/bogot-8th-february-1825' target='_blank'> Carta del 8 de febrero, 1825</a><br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-25th-february-1825' target='_blank'> Carta del 25 de febrero, 1825</a><br><br><a href= 'http://http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");
Pasto.bindTooltip("Pasto");

// Activa el popup para un evento en la línea de tiempo
var PastoLinea = document.getElementById('Pasto');
PastoLinea.addEventListener('click', PastoEvento, false);

function PastoEvento(event) {
  Pasto.openPopup();
}

var Popayan = L.circle([2.441645, -76.606092], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 15000
}).addTo(mymap);

Popayan.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Popayán <br><br> <b>Fecha:</b> Finales de Diciembre, 1824 <br><br> <b>Hechos:</b> <br><br>Al llegar a Popayán, Thomson encontró un medico inglés, el Dr. Wallis, el cual le ayudó en la circulación de las Escrituras. Thomson menciona que Popayán era una de las ciudades que más había sido afectada por la guerra, con unas 14 tomas y retomas de la ciudad.<br><br>En Popayán, Thomson relata el único encuentro hasta el momento en que hubo oposición a la circulación de las copias del Nuevo Testamento que vendía. La objeción provenía del Obispo de Popayán, quien en una conversación con Thomson le comentó que en un artículo del Concilio de Trento se prohibía el uso de las Escrituras que no tuvieran los comentarios por parte de las autoridades católicas para guiar la lectura. El Obispo mencionó que no se oponía a la circulación de las Escrituras, pero que si alguien le preguntaba su opinión al respecto, les referiría al artículo mencionado por el Concilio, pues ese era su deber como buen católico. Thomson le respondió que entendía cuáles eran sus razones, pero que lamentaba que se presentara oposición a la circulación de las Sagradas Escrituras que Dios había dado gratuitamente para todos, y que estaba convencido de que su lectura traía grandes beneficios. El Obispo replicó que también estaba convencido de los beneficios de la lectura de las Escrituras, pero que estas debían ir acompañadas de comentarios para guiar su lectura. <br><br>En Popayán, Thomson vendió 30 copias del Nuevo Testamento y dejó otras 48 para ser vendidas luego. <br><br> <b>Fuentes:</b> <br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/bogot-8th-february-1825' target='_blank'> Carta del 8 de febrero, 1825</a><br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");
Popayan.bindTooltip("Popayan");

// Activa el popup para un evento en la línea de tiempo
var PopayanLinea = document.getElementById('Popayan');
PopayanLinea.addEventListener('click', PopayanEvento, false);

function PopayanEvento(event) {
  Popayan.openPopup();
}

var Guanacas = L.circle([2.524981, -76.088596], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Guanacas.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Paso de Guanacos (Guanacas) <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br><br> Thomson cruza por el territorio de Guanacas, subiendo y bajando a lomo de mula por valles y motañas y contemplando el paisaje. <br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");

Guanacas.bindTooltip("Guanacas");

// Activa el popup para un evento en la línea de tiempo
var GuanacasLinea = document.getElementById('Guanacas');
GuanacasLinea.addEventListener('click', GuanacasEvento, false);

function GuanacasEvento(event) {
  Guanacas.openPopup();
}

var Plata = L.circle([2.388046, -75.891946], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Plata.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> La Plata <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br><br> Thomson pasa por la región de La Plata. <br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");


Plata.bindTooltip("Plata");

// Activa el popup para un evento en la línea de tiempo
var PlataLinea = document.getElementById('Plata');
PlataLinea.addEventListener('click', PlataEvento, false);

function PlataEvento(event) {
  Plata.openPopup();
}

var Neiva = L.circle([2.926438, -75.288807], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Neiva.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Neiva <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Neiva, en donde vende 13 copias del nuevo testamento. <br><br> <b>Fuentes:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-25th-february-1825' target='_blank'> Carta del 25 de febrero, 1825</a><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");

Neiva.bindTooltip("Neiva");

// Activa el popup para un evento en la línea de tiempo
var NeivaLinea = document.getElementById('Neiva');
NeivaLinea.addEventListener('click', NeivaEvento, false);

function NeivaEvento(event) {
  Neiva.openPopup();
}

var Fusagasuga = L.circle([4.343734, -74.361834], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
}).addTo(mymap);

Fusagasuga.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Fusagasuga <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br><br> Thomson pasa por Fusagasugá. <br><br> <b>Fuente:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a></div>");

Fusagasuga.bindTooltip("Fusagasuga");

// Activa el popup para un evento en la línea de tiempo
var FusagasugaLinea = document.getElementById('Fusagasuga');
FusagasugaLinea.addEventListener('click', FusagasugaEvento, false);

function FusagasugaEvento(event) {
  Fusagasuga.openPopup();
}

var Bogota = L.circle([4.597895, -74.076014], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 30000
}).addTo(mymap);

Bogota.bindPopup("<div class='textoPopupsMax'> <h2>Fin de la misión</h2><b>Lugar:</b> Bogotá <br><br> <b>Fecha:</b> 29 de enero, 1825 <br><br> <b>Hechos:</b> <br><br> Thomson llega a Bogotá el 29 de enero y parte hacia Londres en el mes de abril. A su llegada a la capital, menciona que ya no tenía más copias del Nuevo Testamento para distribuir, pues todas las había vendido por los lugares que antes había pasado. Al reflexionar sobre esto, expresa adoración y gratitud hacia Dios por haberlo llevado y guiado en este viaje en el que le permitió hacer circular las Escrituras y por haberlo honrado al emplearlo en la comunicación de la revelación de Dios para el hombre. En la siguiente imagen se puede observar el resumen que hizo de la venta y circulación de las Escrituras en su paso por varios lugares.<br><br><div class='imagenGeneral'> <img src='Imagenes/totalCopiasVendidas.png' alt='Imagen de copias vendidas' border= '5px solid #555' width='90%' height='auto'> </div><br><br> La labor de Thomson culminó con el establecimiento de la primera sociedad bíblica del país, una gran hazaña en su misión. Estuvo en contacto con varios personajes del clero católico y de la política para lograr establecer dicha sociedad. Al principio logró convocar unas reuniones en donde se discutió la viabilidad de esta iniciativa. Estas reuniones se llevaron a cabo el 17, 24 y 31 de marzo en el convento dominicano de la ciudad, en la capilla de la Universidad. Dichos eventos fueron publicados en un periódico de la época llamado <i>El Constitucional</i>, en las ediciones 29, 30 y 31. Durante las reuniones, Thomson menciona que se presentaron puntos de vista tanto a favor como en contra del establecimiento de la sociedad bíblica. Los que estaban en contra decían que el establecimiento de tal sociedad era contraria a los concilios de la Iglesia Católica y que no era apropiado hacer circular las Escrituras sin los comentarios de autoridades católicas que guiaran su lectura. Los que estaban a favor decían que la circulación y lectura de la palabra de Dios traería grandes beneficios para Colombia y que era bueno tenerla sin comentarios, tal como Dios la entregó a la humanidad. Dos ministros del gobierno, el Sr. Gual y el Sr. Castillo, mencionaron que esta sociedad no tenía nada de clandestino y que contaba con el apoyo del gobierno ejecutivo y también de las autoridades eclesiásticas.<br><br>Luego del debate, se presentó la siguiente pregunta a todos los asistentes: \"¿Es compatible con nuestras leyes y costumbres, como colombianos, y con las de la Iglesia Católica Romana, establecer una Sociedad Bíblica Colombiana en esta capital como una sociedad nacional, y cuyo único propósito será imprimir y circular las Sagradas Escrituras, en la versiones autorizadas, en nuestra lengua nativa; y cuenta tal sociedad con la aprobación de esta asamblea?\" La respuesta fue un sí casi unánime.<br><br>Ante este triunfo, Thomson sintió una gran alegría y escribió:<blockquote>\"Bendito sea Dios, que obra todas las cosas conforme al propósito de su voluntad, que hace que la ira del hombre lo alabe, y quien a su debido tiempo le dice a las guerras, tal como lo hace con los vientos y las olas, ¡Cálmate, sosiégate! y así nos deja en medio de la calma para exclamar ¿Quién es Dios como nuestro Dios?, ¿que trae orden de la confusión, y que hace que las aguas broten y que las corrientes fluyan en el desierto?\"</blockquote> La última reunión en la que Thomson estuvo presente se realizó el 7 de abril y fue llevada a cabo por los miembros que se habían suscrito a la Sociedad. En esta asamblea se eligió al Presidente, Vicepresidentes, tesorero y secretarios. Entre estos cargos se encontraban personajes del gobierno colombiano, como el ministro de relaciones exteriores, el Sr. Pedro Gual, y el ministro de finanzas, el Sr. Jose Maria Castillo, y autoridades eclesiásticas como los rectores del colegio del Rosario y de San Bartolomé. Uno de los secretarios de la Sociedad, y que era secretario de la Universidad de la ciudad, era un fraile dominicano que antes había sido secretario del tribunal de la Inquisición; fue él quien escribió los artículos en el periódico <i>El Constitucional</i>. La lista de los elegidos se puede leer en la edición No 32 del Constitucional, como se muestra en la imagen de esta edición más abajo. Se conformó también un comité de 20 personas para administrar los asuntos de la sociedad, la mitad eran clérigos y la otra mitad laicos. Entre los miembros del comité se encontraban los comisionados británicos, el Coronel John Potter Hamilton y el Coronel Patrick Campbell , y el cónsul general británico, el Sr. James Henderson. Esta presencia diplomática extranjera sirvió también como influencia para avanzar con la Sociedad. Además, se establecieron normas y regulaciones, las cuales regulaban el propósito de la sociedad, la revisión y administración de las Escrituras, la frecuencia de las asambleas, la elección de oficiales, los costos de las suscripciones, entre otras. Los artículos publicados en <i>El Constitucional</i> se observan a continuación. <br><br> <b>Nota:</b> Si haces clic en las imágenes, puedes explorar todo el artículo de prensa. <h3>El Constitucional No. 29</h3> <a href='constitucional29.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N29.png' border= '2px solid #555' alt='Imagen del Constitucional 29' width='95%' height='auto'></a>  <h3>The Constitutional No. 29</h3> <a href='constitucional29.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N29.png' border= '2px solid #555' alt='Imagen del Constitutional 29' width='95%' height='auto'></a><br><br><h3>El Constitucional No. 30</h3> <a href='constitucional30.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N30.png' border= '2px solid #555' alt='Imagen del Constitucional 30' width='95%' height='auto'></a>  <h3>The Constitutional No. 30</h3> <a href='constitucional30.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N30.png' alt='Imagen del Constitutional 30' border= '2px solid #555' width='95%' height='auto'></a> <br><br><h3>El Constitucional No. 31</h3> <a href='constitucional31.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N31.png' border= '2px solid #555' alt='Imagen del Constitucional 31' width='95%' height='auto'></a>  <h3>The Constitutional No. 31</h3> <a href='constitucional31.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N31.png' border= '2px solid #555' alt='Imagen del Constitutional 31' width='95%' height='auto'></a><br><br><h3>El Constitucional No. 32</h3> <a href='constitucional32.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N32.png' border= '2px solid #555' alt='Imagen del Constitucional 32' width='95%' height='auto'></a>  <h3>The Constitutional No. 32</h3> <a href='constitucional32.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N32.png' border= '2px solid #555' alt='Imagen del Constitutional 32' width='95%' height='auto'></a><br><br>Luego de regresar a Londres, varios amigos le solicitaron a Thomson que publicara las cartas que había enviado desde Suramérica, para lo cual le proveyeron las cartas que había escrito durante los casi 7 años que estuvo viajando desde Argentina hasta Colombia. Thomson aceptó la solicitud con agrado y sus cartas fueron compiladas y publicadas en 1827 bajo el título de <i>Letters On The Moral And Religious State Of South America</i> (Cartas sobre el estado moral y religioso de Suramérica). Puedes hacer clic en la siguiente imagen para consultar la obra. <br><br> <a href='https://archive.org/details/lettersonmorala00thomgoog/page/n8/mode/2up' target='_blank'><img title='Ver libro en línea' src='Imagenes/lettersThomson.png' border= '2px solid #555' alt='Imagen de libro' width='95%' height='90%'></a><br><br>Igualmente, puedes hacer clic en la siguiente imagen para acceder a algunas de las cartas originales que Thomson escribió con su puño y letra. ¡Será una hazaña si logras entender todo lo que dice!<br><br> <a href='cartasThomson.html'><img title='Ver cartas originales en línea' src='Imagenes/cartaFirmaThomson.png' border= '2px solid #555' alt='Imagen de Carta con firma de Thomson' width='95%' height='90%'></a><br><br>  <b>Fuentes:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 8 de febrero, 1825</a> <br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-25th-february-1825' target='_blank'> Carta del 25 de febrero, 1825</a> <br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-5th-april-1825' target='_blank'> Carta del 5 de abril, 1825</a><br><br><a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogota-7th-april-1825' target='_blank'> Carta del 7 de abril, 1825 </div>");

Bogota.bindTooltip("Bogota");

// Activa el popup para un evento en la línea de tiempo
var bogotaLinea = document.getElementById('Bogota');
bogotaLinea.addEventListener('click', bogotaEvento, false);

function bogotaEvento(event) {
  Bogota.openPopup();
}

//Parámetros para incluir una imagen de mapa sobre el mapa base con la funcion imageOverlay

/*
var imageUrl = './colombia1827.jpg',
imageBounds = [[-8, -85.35], [15.05, -55.1]],
imageOptions = {opacity:parseFloat(document.getElementById("opacity-slider").value)};
var overlay = L.imageOverlay(imageUrl, imageBounds, imageOptions).addTo(mymap);
*/


//var imageUrl = './54835.png',
var imageUrl = './NewGranada1819.jpg',
  //var imageUrl = 'https://mapwarper.net/maps/tile/54835/{z}/{x}/{y}.png',
  imageBounds = [
    [-8, -85.35],
    [15.05, -55.1]
  ];
//imageOptions = {opacity:parseFloat(document.getElementById("opacity-slider").value)};
//var overlay = L.imageOverlay(imageUrl, imageBounds).addTo(mymap);


//var bounds = L.latLngBounds([[-8, -85.35], [15.05, -55.1]]);
//L.rectangle(bounds).addTo(mymap);
//mymap.fitBounds(bounds);


/*
var imageUrl = 'https://mapwarper.net/maps/tile/54835/{z}/{x}/{y}.png',
imageBounds = [[-3.8159970235, -82.9009297198], [13.0944853126, -68.9702656579]],
imageOptions = {opacity:parseFloat(document.getElementById("opacity-slider").value)};
var overlay = L.imageOverlay(imageUrl, imageBounds, imageOptions).addTo(mymap);
*/

/*
var imageUrl = 'https://mapwarper.net/maps/tile/54835/{z}/{x}/{y}.png',
imageBounds = [[-90, 0], [-70, -10]],
imageOptions = {opacity:parseFloat(document.getElementById("opacity-slider").value)};
var overlay = L.imageOverlay(imageUrl, imageBounds, imageOptions).addTo(mymap);
*/


// Configuración de la función de transparencia para el imageOverlay con el metodo setOpacity y uso de DOM
document.getElementById("opacity-slider").addEventListener("mousemove", transparencia);

function transparencia() {

  //overlay.setOpacity(parseFloat(document.getElementById("opacity-slider").value)); // Obtiene el valor para la opacidad
  newGranada1819.setOpacity(parseFloat(document.getElementById("opacity-slider").value));
  colombia1827.setOpacity(parseFloat(document.getElementById("opacity-slider").value));

  document.getElementById("slider-value").innerHTML = parseFloat(document.getElementById("opacity-slider").value); // Muestra el valor de opacidad en la página

}





var popup = L.popup();
popup.setLatLng([-7.980486, -85.2764937])
popup.setContent("<h2> Oprime los círculos en la línea de tiempo de abajo para obtener información de lo que sucedió en cada lugar. También, puedes oprimir los círculos azules sobre el mapa.</h2>")
popup.openOn(mymap);

// Ocultar el título de Mapa base mientras se despliegan las opciones de mapas
var tituloMapaBase = document.getElementsByClassName("leaflet-control-layers");
tituloMapaBase[0].onmouseover = function() {
  ocultarTitulo()
};
tituloMapaBase[0].onmouseout = function() {
  mostrarTitulo()
};

function ocultarTitulo() {
  document.getElementById("mapaBaseSelector").style.display = "none";
}

function mostrarTitulo() {
  document.getElementById("mapaBaseSelector").style.display = "initial";
}
