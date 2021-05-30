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

Guayaquil.bindPopup("<div class='textoPopupsMax'><h2>James Diego Thomson</h2> <h3>Inicio de su recorrido por la Gran Colombia</h3> <div class='imagenGeneral'><img src='Imagenes/JamesDiegoThomson.jpeg' alt='Imagen de canoa' border= '0px solid #555' width='auto' height='auto'></div><br><br><b>Lugar:</b> Guayaquil <br><br> <b>Fecha:</b> 30 de septiembre - 12 de Octubre, 1824 <br><br> <b>Hechos:</b> <br><br> Thomson llegó a Guayaquil el 30 de septiembre de 1824. Había partido desde Lima, Perú el 5 de septiembre por causa de la guerra contra los españoles que se libraba en ese territorio por la independencia, lo cual había obstaculizado su labor misionera. Allí estuvo involucrado en la educación de los jóvenes y en la traducción del Nuevo Testamento a la lengua Quechua para que se leyera entre los pueblos nativos de esa región.<br><br>A su llegada en Guayaquil, en su carta del 5 de octubre de 1824, Thomson le escribió al Rev. Brandram, de la Sociedad Bíblica Británica y Extranjera (BFBS por sus siglas en inglés)<sup>1</sup>, cuál era el propósito de su labor:<blockquote>\"Ya sabes que el único objeto que tengo pensado en América del Sur es el de promover el reino de nuestro Señor Jesucristo. Por supuesto, hay varias formas en que esto se puede hacer, y he pensado que para hacerlo es mejor dejarme guiar por las diversas circunstancias y ocasiones que la providencia de Dios me abra de vez en cuando. Las dos cosas a las que particularmente he prestado más atención todo el tiempo son la educación de la juventud y la circulación de las Sagradas Escrituras\".</blockquote><br>En esta carta se puede leer también que apoyaba con firmeza la causa independentista, pues relata con agrado cómo el ejército Patriota liderado por Bolívar venció a los españoles en una batalla en Junín el 6 de agosto y luego venció en otras provincias. Escribió que esto era un fuerte golpe para la causa española y que:<blockquote>\"Con esta causa terminará, confío, el reinado de opresión y violencia, de ignorancia y fanatismo en Perú, por el cual se ha oprimido durante trescientos años. Que así perezca toda la ignorancia y tiranía de la tierra!... Creo firmemente que la liberación de este país de la esclavitud y la opresión, y la emancipación mental de sus habitantes, dependen del éxito de esta revolución; como la liberación de los judíos luego de la conquista de Babilonia, y la posesión de la tierra de Canaán por el pueblo de Dios sobre sus enemigos. Los españoles, como se sabe bien, han impedido enormemente, por no decir prohibido, el progreso del conocimiento y de la verdadera religión en América. Por eso no es sencillo, ni tampoco apropiado, permanecer indiferente al asunto de esta lucha\".</blockquote><br>En Guayaquil, Thomson imprimió avisos en los que se anunciaba la venta de Nuevos Testamentos en varios lugares públicos. El interés de las personas por este libro se hizo evidente y terminó distribuyendo 738 copias del Nuevo Testamento. Cada copia se vendía a 1 dolar, o también a 8 reales, o un poco menos a veces. Era la primera vez que tanto personas comunes del pueblo como importantes en la política e incluso del clero leían el Nuevo Testamento en español. Thomson nota el interés que se sucitó en la lectura de estas Escrituras:<blockquote>\"Te aseguro que fue gratificante ver casi toda la ciudad juntarse para oir la palabra de Dios, y  aún más, pasar a lo largo de las calles y contar a uno, dos, tres, una docena quizás, ocupados diligentemente en la lectura de sus Nuevos Testamentos. ¿Quién en estas circunstancias podría estar en un estado diferente al de acción de gracias y oración?–acción de gracias a Dios por haber dispuesto a tantos en ocuparse de las cosas que pertenecen a su eterna paz, lo cual, me atrevo a decir,  había estado oculto de sus ojos hasta ahora– y oración, para que los ojos de su entendiemiento sean iluminados, para que se puedan volver de las tinieblas a la luz, y disfrutar la herencia que el Señor ha preparado para los que le aman\".</blockquote><br>El impacto de la lectura del Nuevo Testamento no fue menor en varios personajes del clero católico, Thomson relata:<blockquote>\"...varios sacerdotes y frailes compraron Nuevos Testamentos. En una ocasión, pienso que habían al tiempo cinco frailes en la tienda para comprar, y uno de ellos tomó trece copias. En otra ocasión, un fraile, que había comprado un Nuevo Testamento, vino luego con mucha ansiedad preguntando por la Biblia entera... Esta persona me dijo que todos los frailes en su convento habían comprado Nuevos Testamentos, y que todos estaban muy complacidos con ellos\".</blockquote><br> Así, Thomson fue llevando a cabo su labor de hacer circular las Escrituras con la esperanza de que \"Aquél que causa que la lluvia descienda del cielo para fertilizar el suelo, y que se produzca fruto de los débiles esfuerzos del hombre, quiera dar su bendición sobre la semilla sembrada en este lugar. Como se siembra en debilidad que se levante en fortaleza, y que produzca al ciento por uno\".<br><br><br> <b>Fuentes:</b> <br><br> <a href='https://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-5th-october-1824' target='_blank'> Carta del 5 de octubre, 1824</a> <br><br> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-11th-october-1824' target='_blank'> Carta del 11 de octubre, 1824</a><br><br>1. Esta sociedad fue fundada el 7 de marzo de 1804. En 1817, un poco antes de que Thomson iniciara su viaje por Suramérica en 1818, la BFBS había acumulado la cantidad de 816,278 Biblias y 986,883 Nuevos Testamentos en 18 idiomas diferentes, la mayoría en el idioma inglés. Willliam Canton, <i>A History of the British and Foreign Bible Society</i>, Vol. I (Londres: John Murray, Albemarle Street, W. 1904),103.<a href='https://archive.org/details/cu31924092358260/mode/2up' target='_blank'> Ver libro en línea</a>. </div>");

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

Ambato.bindPopup("<b>Lugar:</b> Ambato <br><br> <b>Fecha:</b> 1 al 3 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 47 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a>");

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

Latacunga.bindPopup("<b>Lugar:</b> Latacunga <br><br> <b>Fecha:</b> 4 al 6 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 104 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a>");

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

Quito.bindPopup("<div class='textoPopupsMax'> <b>Lugar:</b> Quito <br><br> <b>Fecha:</b> 7 al 24 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 50 Nuevos Testamentos para ser usados en una escuela de tipo Lancasteriano que se estaba fundando en Quito.<br><br> Thomson propone establecer un colegio femenino. Para esto se necesitan fondos y Thomson se encarga de entregar una carta, a su llegada a Bogotá, con la petición de dichos fondos al vicepresidente de Colombia.  Esta carta es escrita por la marquesa de San José, algunas de sus amigas y el gobernador de Quito. <br><  br> Thomson vende 80 Nuevos Testamentos en las siguientes cantidades:<br><br> 50 para uso de las escuelas en Quito. <br> 25 para el Provincial del convento de San Francisco. <br> 5 para amigos personales.<br><br> Thomson ordena que 200 copias del Nuevo Testamento y 200 copias del libro de Salmos y proverbios sean enviadas a las diferentes ciudades que había visitado. <br><br> Thomson vende una copia del libro Evidencias del Cristianismo en español al Marqués de San José. Este lo lee con gran deleite y se lo presta a varios de sus amigos, los cuales los examinan detenidamente con satisfacción. Tal es el interés que se genera por este libro, que se decidió imprimir una edición de este por subscripción en Quito. Dicha subscripción era solo de mujeres. <br><br> Thomson entrega dos obras literarias de importancia en el Reino Unido, que llevaba consigo, a un clérigo profesor de una universidad en Quito que entendía el inglés. <br><br> <h3>Biblical Cyclopedia or dictionary of Holy Scriptures by William Jones (Escritor bautista galés)</h3> <br><br> <div> <img src='Imagenes/Biblical.png' border='3px solid #000' alt='Imagen de libro' width='97%' height='auto'>  </div> <a href='https://books.google.com.co/books?id=g0m3p2tphzoC&lpg=PP34&ots=wuFzZFTYsY&dq=Biblical%20Encyclopedia%20or%20dictionary%20of%20Holy%20Scriptures%20by%20William%20Jones&hl=es&pg=PP34#v=onepage&q&f=false' target='_blank'> Ver libro</a> <br><br> <h3>Elements of the philosophy of the human mind by Dugald Stewart </h3> <div> <img src='Imagenes/Elements.png' border='3px solid #000'alt='Imagen de libro' width='97%' height='auto'> </div> <a href='https://books.google.com.co/books?id=VGcAAAAAMAAJ&hl=es&pg=PP9#v=onepage&q&f=false' target='_blank'> Ver libro</a> <br> <br> <b>Fuente:</b> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guaranda-25th-october-1824' target='_blank'> Carta del , 1824</a> <br> &emsp; &emsp; &emsp; &ensp; </div>");


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

Otavalo.bindPopup("<b>Lugar:</b> Otavalo <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson llega a Otavalo. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/popayan-1st-january-1825' target='_blank'> Carta del 1 de enero, 1825</a>");

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

Ibarra.bindPopup("<b>Lugar:</b> Ibarra <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson llega a Ibarra. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/popayan-1st-january-1825' target='_blank'> Carta del 1 de enero, 1825</a>");

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

Tulcan.bindPopup("<b>Lugar:</b> Tulcán <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson llega a Tulcán. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

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

Pasto.bindPopup("<b>Lugar:</b> Pasto <br><br> <b>Fecha:</b> Diciembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson llega a Pasto. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

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

Popayan.bindPopup("<b>Lugar:</b> Popayán <br><br> <b>Fecha:</b> Finales de Diciembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson encuentra oposición respecto a la lectura del NT en Popayán.  <br><br> El obispo de Popayán dijo que no se oponía a la circulación de las Escrituras, pero que si le preguntaban su opinión sobre el uso de las mismas les referería a un artículo del Concilio de Trento en donde se prohibía su uso, pues su deber como católico era seguir las reglas de la Iglesia. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/bogot-8th-february-1825' target='_blank'> Carta del 8 de febrero, 1825</a>");

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

Guanacas.bindPopup("<b>Lugar:</b> Paso de Guanacos (Guanacas) <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson cruza por el territorio de Guanacas en mula. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

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

Plata.bindPopup("<b>Lugar:</b> La Plata <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a La Plata. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");


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

Neiva.bindPopup("<b>Lugar:</b> Neiva <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Neiva. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

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

Fusagasuga.bindPopup("<b>Lugar:</b> Fusagasuga <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Fusagasugá. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

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

Bogota.bindPopup("<div class='textoPopupsMax'> <b>Lugar:</b> Bogota <br><br> <b>Fecha:</b> 29 de enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Bogotá. <br><br>Thomson relata con alegría que se pudo establecer la Sociedad Bíblica Colombiana y que el acontecimiento tuvo mención en un periódico de circulación nacional llamado <i>El Constitucional</i>. Menciona que en las ediciones No 29, 30, 31 y 32 se pueden observar artículos relacionados con el establecimiento de esta sociedad. <br><br> <b>Nota:</b> A continuación aparecen recortes del Constitucional en donde se menciona a la Sociedad Bíblica. Si haces clic en las imágenes, puedes explorar todo el artículo de prensa <h3>El Constitucional No. 29</h3> <a href='constitucional29.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N29.png' border= '2px solid #555' alt='Imagen del Constitucional 29' width='95%' height='auto'></a>  <h3>The Constitutional No. 29</h3> <a href='constitucional29.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N29.png' border= '2px solid #555' alt='Imagen del Constitutional 29' width='95%' height='auto'></a><br><br><h3>El Constitucional No. 30</h3> <a href='constitucional30.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N30.png' border= '2px solid #555' alt='Imagen del Constitucional 30' width='95%' height='auto'></a>  <h3>The Constitutional No. 30</h3> <a href='constitucional30.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N30.png' alt='Imagen del Constitutional 30' border= '2px solid #555' width='95%' height='auto'></a> <br><br><h3>El Constitucional No. 31</h3> <a href='constitucional31.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N31.png' border= '2px solid #555' alt='Imagen del Constitucional 31' width='95%' height='auto'></a>  <h3>The Constitutional No. 31</h3> <a href='constitucional31.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N31.png' border= '2px solid #555' alt='Imagen del Constitutional 31' width='95%' height='auto'></a><br><br><h3>El Constitucional No. 32</h3> <a href='constitucional32.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitucional_N32.png' border= '2px solid #555' alt='Imagen del Constitucional 32' width='95%' height='auto'></a>  <h3>The Constitutional No. 32</h3> <a href='constitucional32.html'><img title='Explora todo el artículo de prensa' src='Imagenes/Constitutional_N32.png' border= '2px solid #555' alt='Imagen del Constitutional 32' width='95%' height='auto'></a><br><br><b>Fuentes:</b><br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 8 de febrero, 1825</a> <br><br> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-5th-april-1825' target='_blank'> Carta del 5 de abril, 1825</a> </div>");

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
popup.setContent("<h2> Oprime los círculos en esta línea de tiempo para obtener información de lo que sucedió en cada lugar. También, puedes oprimir los círculos azules sobre el mapa.</h2>")
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
