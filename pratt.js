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
  center: [11.24079, -73.19904],
  zoom: 6,
  layers: Thunderforest_Pioneer,
  fadeAnimation: true,
});



// Creación de paneles y mapas antiguos para luego superponerlos en el efecto de opacidad (mapa antiguo sobre el mapa base)


//Mapa de la Carta de Colombia en 1827
mymap.createPane('mapa1827');
mymap.getPane('mapa1827').style.zIndex = 300;

var colombia1827 = L.tileLayer('https://mapwarper.net/maps/tile/55558/{z}/{x}/{y}.png', {
  pane: 'mapa1827',
  tileSize: 512,
  detectRetina: true,
  zoomOffset: -1,
  attribution: 'map warper'
});

// Mapa de Venezuela, Nueva Granada y Ecuador, 1856
mymap.createPane('mapaNuevaGranada_1856_Mitchell');
mymap.getPane('mapaNuevaGranada_1856_Mitchell').style.zIndex = 300;

var NuevaGranada1856 = L.tileLayer('https://mapwarper.net/maps/tile/57172/{z}/{x}/{y}.png', {
  pane: 'mapaNuevaGranada_1856_Mitchell',
  tileSize: 512,
  detectRetina: true,
  zoomOffset: -1,
  attribution: 'map warper, Biblioteca Nacional de Colombia'
});

// Mapa de la República de Nueva Granada, 1858
mymap.createPane('mapaNuevaGranada_1858_Samper');
mymap.getPane('mapaNuevaGranada_1858_Samper').style.zIndex = 300;

var NuevaGranada1858 = L.tileLayer('https://mapwarper.net/maps/tile/57175/{z}/{x}/{y}.png', {
  pane: 'mapaNuevaGranada_1858_Samper',
  tileSize: 512,
  detectRetina: true,
  zoomOffset: -1,
  attribution: 'map warper, Biblioteca Nacional de Colombia'
});



NuevaGranada1856.addTo(mymap); // Iniciar por defecto con Mapa Histórico de la Nueva Granada de Mitchell en 1856

//Función para cambiar los mapas superpuestos
function superPonerMapa() {
  var leerValorMapa = document.getElementById("mapas").value;

  if (leerValorMapa === "colombia1827") {
    NuevaGranada1856.remove();
    NuevaGranada1858.remove();
    colombia1827.addTo(mymap);
  }
  if (leerValorMapa === "NuevaGranada1856_Mitchell") {
    colombia1827.remove();
    NuevaGranada1858.remove();
    NuevaGranada1856.addTo(mymap);
  }
  if (leerValorMapa === "NuevaGranada1858_Samper") {
    NuevaGranada1856.remove();
    colombia1827.remove();
    NuevaGranada1858.addTo(mymap);
  }

}




// Mapas base para seleccionar

var baseMaps = {
  "Mate &nbsp;&nbsp;&nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/Thunderforest_pioneer.png' alt='Mapa de terreno' width='70px' height='50px'></div>": Thunderforest_Pioneer,
  "Agua &nbsp;&nbsp;&nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/Stamen_watercolor.png' alt='Mapa Color de Agua' width='70px' height='50px'></div>": Stamen_Watercolor,
  "Terreno <div class='mapa-imagenes-selector'><img src='Imagenes/Stamen_terrain.png' alt='Mapa de terreno' width='70px' height='50px'></div>": Stamen_Terrain,
  "Calles &nbsp;&nbsp;<div class='mapa-imagenes-selector'><img src='Imagenes/calles.png' alt='Mapa de calles' width='70px' height='50px'></div>": calles,
  "Satelite <div class='mapa-imagenes-selector'><img src='Imagenes/satelite.png' alt='Mapa de satelite' width='70px' height='50px'></div><br>&nbsp;": satelite,


  //"Satelite": satelite,
  //"Calles": calles,
  //"Agua": Stamen_Watercolor,
  //"Terreno": Stamen_Terrain,
  //"Thunder": Thunderforest_Pioneer,


  //"Nueva Granada (1819)" : newGranada1819

};



L.control.layers(baseMaps).addTo(mymap); //Permite el control de cambio de mapas


//Creación de círculos para interactuar con lugares en el mapa base
var santaMarta = L.circle([11.24079, -74.19904], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});

santaMarta.bindPopup("<div class='textoPopupsMin'><h2>Henry Barrington Pratt</h2><h3>Inicio de su recorrido por la Nueva Granada</h3><div class='imagenGeneral'><img src='Imagenes/henryPratt.jpeg' alt='Imagen de Thomson' border= '0px solid #555' width='90%' height='90%'></div><br><br> <b>Lugar:</b> Santa Marta <br><br> <b>Fecha:</b> 8 de marzo, 1856 <br><br> <b>Hechos:</b> <br><br> El ministro presbiteriano Henry Barrington Pratt llega a Santa Marta cuando tenía 24 años abordo de un navío llamado \"Caprey\". <br><br><br> <b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 28. <a href='https://archive.org/details/historiadelcrist00ordo/page/n31/mode/2up' target='_blank'>Ver libro en línea </a> </div>");

santaMarta.bindTooltip("Santa Marta");

// Activa el popup para un evento en la línea de tiempo
var santaMartaLinea = document.getElementById('santaMarta');
santaMartaLinea.addEventListener('click', santaMartaEvento, false);

function santaMartaEvento(event) {
  santaMarta.addTo(mymap);
  santaMarta.openPopup();
}



var cartagena = L.circle([10.39972, -75.51444], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});

cartagena.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Cartagena <br><br> <b>Fecha:</b> 17 de marzo, 1856 <br><br> <b>Hechos:</b> <br><br> El ministro Pratt llegó a Cartagena y allí encontró una capilla protestante en operación en un antiguo convento que estaba a cargo del Reverendo Ramón Montsalvatge. Montsalvatge fue un ex-fraile capuchino español que estaba allí por cosas de la providencia, pues en el año 1855, durante un viaje que hacía con rumbo a Venezuela en un pequeño velero, se levantó una tormenta en el Caribe que hizo zozobrar el navío en las costas de Cartagena. Entre los pocos sobrevientes del naufragio estaba Montsalvatge. <br><br> Francisco Ordoñez nos comenta sobre este ministro: <blockquote>\"...había nacido en Cataluña y en su juventud ingresó al convento de monjes capuchinos; después fue soldado al servicio del rey; y cambiando más tarde las armas por los libros, se dedicó al estudio en varios centros educativos importantes. No se sabe dónde ni cuándo propiamente llegó a conocer el Evangelio, lo cierto es que le hallamos por los años del 48 estudiando Teología en Génova, Italia, en donde recibió su ordenación al ministerio; y salió con el deseo de viajar a las prodigiosas tierras americanas, no con el afán de correr aventuras y enriquecerse, sino con el propósito sencillo de hacer conocer a otros la gloriosa verdad que había encontrado.\"</blockquote> <br> Al parecer el interés por la religión católica en Cartagena no era mucho, pues los monasterios y conventos estaban casi vacíos. El convento donde ofrecía servicios Montsalvatge era bien concurrido por hombre jóvenes, pero no asistían mujeres. Pratt predicó en inglés algunas veces en Cartagena pero consideró que el Rev. Montsalvatge estaba haciendo un buen trabajo, de forma que emprendió rumbo hacia Bogotá.<br><br><br> <b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 24. <a href='https://archive.org/details/historiadelcrist00ordo/page/n27/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 44-45. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a></div>");

cartagena.bindTooltip("Cartagena");

// Activa el popup para un evento en la línea de tiempo
var cartagenaLinea = document.getElementById('cartagena');
cartagenaLinea.addEventListener('click', cartagenaEvento, false);

function cartagenaEvento(event) {
  cartagena.addTo(mymap);
  cartagena.openPopup();
}

var ubicacionRioMagdalena = [
  [10.39972, -75.51444],
  [10.128782, -74.945406],
  [9.973208, -74.795274],
  [9.935420, -74.863501],
  [9.423566, -74.739243],
  [9.235262, -74.514733],
  [9.274198, -74.436053],
  [9.246479, -74.425136],
  [9.213263, -74.399643],
  [8.985890, -73.979379],
  [8.969244, -73.865196],
  [8.801168, -73.793172],
  [8.464719, -73.749097],
  [8.140540, -73.779381],
  [8.070606, -73.868609],
  [7.767011, -73.805813],
  [7.478598, -73.910413],
  [7.030290, -73.884513],
  [6.595187, -74.388046],
  [6.407187, -74.370703],
  [6.121935, -74.601780],
  [5.865354, -74.638529],
  [5.545460, -74.640291],
  [5.214117, -74.729179],
  [4.704129, -74.168166],
];

var rioMagdalena = L.polyline(ubicacionRioMagdalena, {
  color: 'red'
});

rioMagdalena.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> río Magdalena <br><br> <b>Fecha:</b> Marzo - Mayo, 1856 <br><br> <b>Hechos:</b> <br><br> Pratt viajó por el río Magdalena y visitó varios lugares, en los cuales aprovechó para repartir copias del Nuevo Testamento a personas que lo solicitaban. Entre ellos Mompós y San Pablo. <br><br><br> <b>Fuentes:</b> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019),45. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

rioMagdalena.bindTooltip("Trayecto por el río Magdalena");

// Activa el popup para un evento en la línea de tiempo
var rioMagdalenaLinea = document.getElementById('rioMagdalena');
rioMagdalenaLinea.addEventListener('click', rioMagdalenaEvento, false);

function rioMagdalenaEvento(event) {
  rioMagdalena.addTo(mymap);
  rioMagdalena.openPopup();
}


var mompos = L.circle([9.24194, -74.42667], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


mompos.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> Mompós <br><br> <b>Fecha:</b> Marzo - Mayo, 1856 <br><br> <b>Hechos:</b> <br><br> Mompós fue uno de los puertos en donde Pratt repartió copias del Nuevo Testamento. <br><br><br> <b>Fuentes:</b> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019),45. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

mompos.bindTooltip("Mompós");

// Activa el popup para un evento en la línea de tiempo
var momposLinea = document.getElementById('mompos');
momposLinea.addEventListener('click', momposEvento, false);

function momposEvento(event) {
  mompos.addTo(mymap);
  mompos.openPopup();
}


var sanPablo = L.circle([7.479765, -73.9241597], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


sanPablo.bindPopup("<div class='textoPopupsMin'><b>Lugar:</b> San Pablo <br><br> <b>Fecha:</b> Marzo - Mayo, 1856 <br><br> <b>Hechos:</b> <br><br> San Pablo fue otro de los puertos en donde Pratt repartió copias del Nuevo Testamento <br><br><br> <b>Fuentes:</b> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019),45. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

sanPablo.bindTooltip("San Pablo");

// Activa el popup para un evento en la línea de tiempo
var sanPabloLinea = document.getElementById('sanPablo');
sanPabloLinea.addEventListener('click', sanPabloEvento, false);

function sanPabloEvento(event) {
  sanPablo.addTo(mymap);
  sanPablo.openPopup();
}



var honda = L.circle([5.20856, -74.73584], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


honda.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Honda <br><br> <b>Fecha:</b> Marzo - Mayo, 1856 <br><br> <b>Hechos:</b> <br><br> Pratt dejó un suplemento de Biblias a un respetado Señor Inglés quien ya había vendido un buen número de ellas. La práctica de repartir Biblias y posteriormente folletos fue uno de los principales medios de evangelización por parte de los misioneros protestantes por muchos años en Colombia. A mediados del siglo XIX, los esfuerzos de la labor protestante estaban guiados por la creencia que: \"Nada está mejor calculado para minar la desdichada superstición de los Papistas que la lectura de la Palabra de Dios\". <br><br><br> <b>Fuentes:</b> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019),45. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a><br><br> Quiring, Wilmer A. The Establishment of Evangelical Christianity in Colombia, South America, 1825-1900. M.A. thesis (Hartford: Hartford Seminary Foundation, 1957), 88. Documento citado de una carta de B. G. Pratt, hijo de H. B. Pratt, escrita al Rev. A. M. Allan, Bucaramanga, Colombia.  </div>");

honda.bindTooltip("Honda");

// Activa el popup para un evento en la línea de tiempo
var hondaLinea = document.getElementById('honda');
hondaLinea.addEventListener('click', hondaEvento, false);

function hondaEvento(event) {
  honda.addTo(mymap);
  honda.openPopup();
}


var bogota = L.circle([4.60971, -74.08175], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 5000
});


bogota.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bogotá <br><br> <b>Fecha:</b> 20 de junio, 1856 <br><br> <b>Hechos:</b> <br><br> Luego de un largo viaje por el río Magdalena y varios días en lomo de mula, Pratt llegó a Bogotá poco tiempo después de la sanción de libertad religiosa del 14 de mayo de 1855. Esta ley decretaba que no había religión de Estado y que por tanto los granadinos tenían libertad de creencia y de culto.<br><br> El 26 de Junio Pratt escribió una carta en la que menciona que no encontró muy animados a la comunidad de ingleses y americanos por su trabajo, pero que los liberales se mostraban muy cooperantes. También, presentó varias cartas de introducción a varios hombres prominentes en el gobierno y los negocios.<br><br> Por este tiempo, Pratt celebró el primer culto protestante en el hotel Dickson delante de diez extranjeros y dos colombianos. Y luego empezó a ofrecer cultos en el idioma español. El pueblo capitalino empezó a mostrar interés y asistir a estos cultos. Pero su motivación era más un sentimiento anticlerical de la época, pues cuando escucharon que los sermones no se dirigían en contra de la Iglesia Católica sino que trataban sobre el pecado y la salvación en Cristo, dejaron de mostrar interés. <br><br> Ordoñez menciona que Pratt veía una urgente necesidad del Evangelio en el pueblo. En una de sus cartas, Pratt escribió:<blockquote>\"Casi todo el mundo, dice, confía para su salvación eterna en ritos y ceremonias exteriores; entre la juventud y los hombres más bien educados, no se ve interés alguno por la iglesia, habiendo caído simplemente en un vago deísmo sin orientación definida\".</blockquote> <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 30. <a href='https://archive.org/details/historiadelcrist00ordo/page/n33/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 45-46. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bogota.bindTooltip("Bogotá");

// Activa el popup para un evento en la línea de tiempo
var bogotaLinea = document.getElementById('bogota');
bogotaLinea.addEventListener('click', bogotaEvento, false);

function bogotaEvento(event) {
  bogota.addTo(mymap);
  bogota.openPopup();
}

var bogotaArticulosTiempo = L.circle([4.50971, -73.98175], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 2000
});


bogotaArticulosTiempo.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bogotá <br><br> <b>Fechas:</b> Septiembre de 1856 y Mayo de 1857 <br><br> <b>Hechos:</b> <br><br> A finales del año de 1856, Pratt publicó dos artículos en el periódico bogotano \"El Tiempo\" sobre los problemas históricos que tiene la doctrina católica sobre la supremacía papal y la residencia de Pedro en Roma. Los dos artículos se reimprimieron por separado para difundirse, lo cual estimuló mucho la venta de Biblias.<br><br> En mayo de 1857 publicó un tercer artículo sobre el apóstol Pedro y su rol como Papa. El Coronel James Fraser aprovechaba sus conexiones para enviar estos artículos y otros tratados a sus amigos en Colombia. Estos artículos se pueden consultar en los siguientes enlaces. <br><br> Artículo 1: <a href='https://archive.org/details/nochesconlosroma00seym/page/372/mode/2up'>¿Estuvo San Pedro alguna vez en Roma?</a><br><br> Artículo 2: <a href='https://archive.org/details/nochesconlosroma00seym/page/380/mode/2up'>San Pedro en Roma.</a><br><br> Artículo 3: <a href='https://archive.org/details/nochesconlosroma00seym/page/386/mode/2up'>¿Fue San Pedro Papa?</a><br><br>  <br><br><br> <b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 31. <a href='https://archive.org/details/historiadelcrist00ordo/page/n33/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 46-47. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bogotaArticulosTiempo.bindTooltip("Pratt publica varios artículos en el periódico El Tiempo");

// Activa el popup para un evento en la línea de tiempo
var bogotaArticulosTiempoLinea = document.getElementById('bogotaArticulosTiempo');
bogotaArticulosTiempoLinea.addEventListener('click', bogotaArticulosTiempoEvento, false);

function bogotaArticulosTiempoEvento(event) {
  bogotaArticulosTiempo.addTo(mymap);
  bogotaArticulosTiempo.openPopup();
}


var poligonoLugaresVarios = [
  [4.70971, -74.18175],
  [6.25184, -75.56359],
  [7.89391, -72.50782],
  [7.12539, -73.1198],
  [6.45647, -73.25502]
];

bogota1857 = L.polygon(poligonoLugaresVarios, {
  color: 'blue'
});


bogota1857.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bogotá <br><br> <b>Fecha:</b> Año de 1857 <br><br> <b>Hechos:</b> <br><br> La Sociedad Bíblica Británica y Extranjera envió al misionero A. J. Duffield a Bogotá para ver la posibilidad de reanudar la labor que antes había iniciado James Thomson de repartir copias del Nuevo Testamento. Pratt y Duffield trabajaron juntos y lograron vender 7000 copias en 1857. Estas copias fueron impresas en Bogotá en los talleres de la Tipografía de los Hermanos Echeverry, pues se había dificultado importarlas por escasez de transporte.<br><br> El Arzobispo de la ciudad escribió cartas prohibiendo el uso de la Biblia protestante y amenazando con excomulgar a los que la leyeran, pero al parecer esto despertó la curiosidad de las personas y ayudó a su venta.<br><br> En el mismo año, Pratt viaja por varios lugares de Colombia para explorar y evangelizar. Escribió que Medellín era una fortaleza de intolerancia papal y que el Socorro era un buen centro para trabajar por su libre empresa y libre opinión. Así como Cúcuta y Bucaramanga. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 31. <a href='https://archive.org/details/historiadelcrist00ordo/page/n33/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 47-49. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bogota1857.bindTooltip("En 1857 se vendieron 7000 copias del Nuevo Testamento y Pratt visita varios lugares para explorar.");

// Activa el popup para un evento en la línea de tiempo
var bogota1857Linea = document.getElementById('bogota1857');
bogota1857Linea.addEventListener('click', bogota1857Evento, false);

function bogota1857Evento(event) {
  bogota1857.addTo(mymap);
  bogota1857.openPopup();
}

var bucaramanga = L.circle([7.12539, -73.1198], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 5000
});


bucaramanga.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bucaramanga <br><br> <b>Fecha:</b> (Enero - Junio)?, 1858 <br><br> <b>Hechos:</b> <br><br> En 1858, Pratt fue a Bucaramanga y Piedecuesta por invitación del Sr. Paredes, quien había sido ministro colombiano en los Estados Unidos. La familia de Paredes era protestante y por ello se había tenido que enfrentar a los ataques del obispo de Pamplona. El ministro Paredes tenía un colegio de secundaria para niños con 85 estudiantes y una escuela privada para niñas de 15 alumnas, ambos con ideas liberales y anticatólicas. Pratt aprovechó la ocasión e hizo contacto con varios jóvenes liberales de Bucaramanga y también con personas de influencia. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 31. <a href='https://archive.org/details/historiadelcrist00ordo/page/n33/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 49. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bucaramanga.bindTooltip("Bucaramanga");

// Activa el popup para un evento en la línea de tiempo
var bucaramangaLinea = document.getElementById('bucaramanga');
bucaramangaLinea.addEventListener('click', bucaramangaEvento, false);

function bucaramangaEvento(event) {
  bucaramanga.addTo(mymap);
  bucaramanga.openPopup();
}

var bogota1858 = L.circle([4.30971, -73.78175], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 3000
});


bogota1858.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bogotá <br><br> <b>Fecha:</b> Julio - Septiembre, 1858 <br><br> <b>Hechos:</b> <br><br> De regreso a Bogotá, algunos colombianos le manifestaron a Pratt el deseo de que se estableciera un colegio donde se puediera educar a sus hijos \"libres de las supersticiones de la iglesia de Roma\". Por ello Pratt escribió a la Junta de misiones para que enviara un misionero para empezar esta labor educativa. En respuesta fue enviado el Rev. Samuel Sharpe junto a su esposa en julio de 1858, quienes iniciaron una escuela diurna en español e inglés, y también una escuela nocturna para obreros que inició con 18 estudiantes y en donde se hacía énfasis en la lectura de la Biblia, la escritura y la aritmética.<br><br> Se reanudaron los cultos en inglés, pero como varios asistentes extranjeros también sabían español, los cultos se empezaron a dar en español. Por ello el siguiente Domingo asisitieron 38 personas, de las cuales 25 eran colombianos. Esto levantó las alarmas por parte del clero católico y se presentó una fuerte oposición contra estos cultos protestantes. Se espiaban las personas que asistían a estos cultos, la casa en donde se hacían fue apedreada, aparecieron letreros cerca de la casa de culto como \"Abajo con el colegio\" y \"Muerte a los ministros protestantes\". Además, el arzobispo publicó una circular \"contra los herejes y masones\", haciendo referencia a los protestantes, pero esto tuvo un efecto contrario al que esperaba pues la asistencia llegó a 150 y la venta de biblias y libros doctrinales aumentó. El arzobispo luego hizo un llamado a quemar biblias protestantes y \"otros libros heréticos.\"<br><br>Los cultos en español se acompañaron del canto congregacional, lo cual era una novedad en Colombia. Sin embargo, habían dificultades para adaptar los tonos de los himnos a las perticularidades del verso español, así que se terminó cantando los Salmos en español, buscando que la congregación los aprendiera poco a poco. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 32. <a href='https://archive.org/details/historiadelcrist00ordo/page/n35/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 51-53. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bogota1858.bindTooltip("El misionero Samuel Sharpe establece un colegio diurno y nocturno.<br> Pratt ofrece cultos en español.");

// Activa el popup para un evento en la línea de tiempo
var bogota1858Linea = document.getElementById('bogota1858');
bogota1858Linea.addEventListener('click', bogota1858Evento, false);

function bogota1858Evento(event) {
  bogota1858.addTo(mymap);
  bogota1858.openPopup();
}


var regresoUSA = L.circle([37.55376, -77.46026], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


regresoUSA.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Estados Unidos <br><br> <b>Fecha:</b> 1859 - 1860 <br><br> <b>Hechos:</b> <br><br> Pratt regresa a Estados Unidos, en donde traduce la obra <i>Evening with the Romanists</i> (Noches con los Romanistas) de Michael Seymour. Estando allá se casó con Joanna Frances, hija de un ministro evangélico, y se quedó sirviendo durante la guerra civil de Estados Unidos entre 1861 y 1865.<br><br><i>Noches con los Romanistas</i> fue un libro muy solicitado por los protestantes en lugares hispanoparlantes, ya que examinaba varias doctrinas católicas y las criticaba por carecer de fundamento bíblico. Puedes hacer clic en la siguiente imagen para consultar la obra de Noches con los Romanistas.<br><br><a href='https://archive.org/details/nochesconlosroma00seym/page/n5/mode/2up' target='_blank'><img title='Ver libro en línea' src='Imagenes/nochesRomanistas.png' border= '2px solid #555' alt='Imagen de libro' width='auto' height='auto'></a><br><br> <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 34. <a href='https://archive.org/details/historiadelcrist00ordo/page/n37/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 53. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

regresoUSA.bindTooltip("Pratt regresa a Estados Unidos");

// Activa el popup para un evento en la línea de tiempo
var regresoUSALinea = document.getElementById('regresoUSA');
regresoUSALinea.addEventListener('click', regresoUSAEvento, false);

function regresoUSAEvento(event) {
  regresoUSA.addTo(mymap);
  regresoUSA.openPopup();
}


var barranquilla = L.circle([10.96854, -74.78132], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


barranquilla.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Barranquilla <br><br> <b>Fecha:</b> Mayo, 1869 <br><br> <b>Hechos:</b> <br><br> El Rev. Pratt regresó a Colombia auspiciado por la Foreign Missions of the Presbyterian Church in the United States (Junta de misiones de la Iglesia Presbiteriana de Estados Unidos). Desembarcó en Barranquilla y vino con su esposa y sus tres hijos:  Benjamín, Catalina y Luisa.<br><br>Pratt continuó con su misión evangelizadora repartiendo biblias y tratados. Un americano naturalizado, Mr. Hoyer, le prestó su casa para llevar a cabo los servicios protestantes. Pratt reportó una asistencia a la escuela dominical de 22 personas. También, un grupo de amigos le pidió que abriera un colegio, y considerando el alto índice de analfabetismo y la necesidad de leer la Biblia, le escribió a Adam H. Erwin, un amigo suyo que era profesor en Estados Unidos para que viniera a Barranquilla para abrir un colegio. Mr. Erwin llegó a Barranquilla en enero de 1872, estableció el colegio y fue nombrado parte de la misión.<br><br>Pratt se quedó en Barranquilla por tres años. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 34. <a href='https://archive.org/details/historiadelcrist00ordo/page/n37/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 74 - 75. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

barranquilla.bindTooltip("Barranquilla");

// Activa el popup para un evento en la línea de tiempo
var barranquillaLinea = document.getElementById('barranquilla');
barranquillaLinea.addEventListener('click', barranquillaEvento, false);

function barranquillaEvento(event) {
  barranquilla.addTo(mymap);
  barranquilla.openPopup();
}

var socorro = L.circle([6.45647, -73.25502], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 10000
});


socorro.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Socorro <br><br> <b>Fecha:</b> 1873 - 1874 <br><br> <b>Hechos:</b> <br><br> Pratt decidió trasladarse a Bucaramanga en busca de un cambio clima, ya que la salud de su esposa había empezado a decaer. Allí nuevamente realiza una labor de evangelismo personal.<br><br> Luego, Pratt visitó varios pueblos de la región y decidió trasladarse al Socorro, que en ese tiempo era la capital de Santander. Allí fue apoyado por una familia de apellido Pradilla, descendiente del Coronel Fraser. Estableció una escuela primaria y ofreció reuniones evangélicas. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 34 - 35. <a href='https://archive.org/details/historiadelcrist00ordo/page/n37/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 75. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

socorro.bindTooltip("Socorro");

// Activa el popup para un evento en la línea de tiempo
var socorroLinea = document.getElementById('socorro');
socorroLinea.addEventListener('click', socorroEvento, false);

function socorroEvento(event) {
  socorro.addTo(mymap);
  socorro.openPopup();
}

var bucaramanga1875 = L.circle([7.02539, -73.3198], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 7000
});


bucaramanga1875.bindPopup("<div class='textoPopupsMax'><b>Lugar:</b> Bucaramanga <br><br> <b>Fecha:</b> 1875 - 1877 <br><br> <b>Hechos:</b> <br><br> Pratt logra establecer una imprenta en Bucaramanga para publicar folletos y tratados a gran escala. La idea original era establecer la imprenta en el Socorro, pero por falta de un transporte adecuado se quedó en Bucaramanga.<br><br> A principios de 1875, con la imprenta se logró publicar el primer periódico protestante, \"La Prensa Evangélica\", con una edición de 1200 copias. Fue una publicación mensual que se mantuvo mientras Pratt permaneció en el país. Haz clic en la siguiente imagen para observar la primera publicación de este periódico.<br><br> <a href='prensaEvangelica1.html'><img title='Explora todo el artículo de prensa' src='Imagenes/prensaEvangelica.png' border= '2px solid #555' alt='Imagen del Constitucional 29' width='95%' height='auto'></a><br><br> En el mismo año, también publicó una revisión tentativa de los Salmos. <br><br> Como la salud de su esposa continuó decayendo, ella regresó a Estados Unidos junto con sus hijos en 1876. La hija menor, Juanita, se enfermó durante el viaje y murió al día siguiente de llegar a Richmond, Virginia.<br><br>Pratt continuó su labor misionera y también empezó la revisión del Nuevo Testamento, pero solo logró publicar el Evangelio de Mateo en el año 1877, puesto que su trabajo se vio interrumpido por la guerra civil colombiana de 1876-1877, guerra que tuvo motivaciones religiosas y políticas. <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 35. <a href='https://archive.org/details/historiadelcrist00ordo/page/n37/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 76. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a> </div>");

bucaramanga1875.bindTooltip("Pratt publica el primer periódico de carácter protestante en 1875, \"La Prensa Evangélica\"");

// Activa el popup para un evento en la línea de tiempo
var bucaramanga1875Linea = document.getElementById('bucaramanga1875');
bucaramanga1875Linea.addEventListener('click', bucaramanga1875Evento, false);

function bucaramanga1875Evento(event) {
  bucaramanga1875.addTo(mymap);
  bucaramanga1875.openPopup();
}


var bogota1877 = L.circle([4.50971, -73.98175], {
  //color: 'black',
  fillColor: '#03f',
  fillOpacity: 0.5,
  radius: 3000
});


bogota1877.bindPopup("<div class='textoPopupsMax'><h2>Fin de la misión</h2><b>Lugar:</b> Bogotá <br><br> <b>Fecha:</b> 1877 - 1878 <br><br> <b>Hechos:</b> <br><br> Pratt regresa a Bogotá para ver el trabajo que había iniciado 20 años atrás. Visitó la congregación y recibió a algunos nuevos miembros dentro de ésta. Su tiempo en la ciudad fue corto. <br><br> En septiembre de 1878, Pratt partió de regreso a Estados Unidos, en donde terminó siendo pastor de la Iglesia Hispanoamericana de Brooklyn, Nueva York.<br><br> La Junta de misiones suspendió su trabajo en Colombia por las condiciones de la guerra, como se evidencia en el reporte anual de 1878: <blockquote>\"Durante gran parte del año, los Estados Unidos de Colombia han sido tan violentamente agitados por una guerra civil amarga y  fiera, que no únicamente la labor de nuestros misioneros ha sido grandemente paralizada, sino que la vida de Mr. Pratt, como había razón para temer, estaba por algún tiempo expuesta a serio peligro. En la fecha de nuestra última carta, había algo de tregua en el progreso de la guerra, pero todavía hay una gran incertidumbre sobre el resultado  final\".</blockquote> Sobre Pratt, Ordoñez alaba su labor y escribe: <blockquote>\"Recomendamos su ejemplo a las generaciones presentes y futuras como pauta invariable de fe y fidelidad en el servicio de nuestro bendito Señor y Maestro\".</blockquote> <br><br><b>Fuentes:</b> <br><br> Francisco Ordoñez, Historia del Cristianismo Evangélico en Colombia (Cali: La Alianza Cristiana y Misionera, 1956), 35-36. <a href='https://archive.org/details/historiadelcrist00ordo/page/n37/mode/2up' target='_blank'>Ver libro en línea</a> <br><br> Javier Rodríguez, Hacia una historia del protestantismo en Colombia (Medellín: Editorial Universidad Pontificia Bolivariana y Corporación Honorable Presbiterio Central de la Iglesia Presbiteriana de Colombia, 2019), 76-77. <a href='https://repository.upb.edu.co/bitstream/handle/20.500.11912/5136/hacia%20una%20historia%20del%20protestantismo.pdf?sequence=1&isAllowed=y' target='_blank'>Ver libro en línea</a><br><br>Seventeenth Annual Report of the Executive Committee of Foreign Missions (1878, 5) </div>");

bogota1877.bindTooltip("Fin de la misión en Colombia");

// Activa el popup para un evento en la línea de tiempo
var bogota1877Linea = document.getElementById('bogota1877');
bogota1877Linea.addEventListener('click', bogota1877Evento, false);

function bogota1877Evento(event) {
  bogota1877.addTo(mymap);
  bogota1877.openPopup();
}



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
  NuevaGranada1858.setOpacity(parseFloat(document.getElementById("opacity-slider").value));
  colombia1827.setOpacity(parseFloat(document.getElementById("opacity-slider").value));
  NuevaGranada1856.setOpacity(parseFloat(document.getElementById("opacity-slider").value));

  document.getElementById("slider-value").innerHTML = parseFloat(document.getElementById("opacity-slider").value); // Muestra el valor de opacidad en la página

}


/*
var popup = L.popup()
.setLatLng([-1.180486, -83.8764937])
.setContent("<h1>Oprime los círculos azules para obtener información de lo que sucedió en cada lugar.</h1>")
.openOn(mymap);

*/

// Ocultar el título de Mapa base mientras se despliegan las opciones de mapas
var tituloMapaBase = document.getElementsByClassName("leaflet-control-layers");
tituloMapaBase[0].onmouseover = function(){ocultarTitulo()};
tituloMapaBase[0].onmouseout = function(){mostrarTitulo()};
function ocultarTitulo(){
  document.getElementById("mapaBaseSelector").style.display = "none";
}
function mostrarTitulo(){
  document.getElementById("mapaBaseSelector").style.display = "initial";
}
