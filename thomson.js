

//var mymap = L.map('mapid').setView([-2.180486, -79.8764937], 6);

//var lugares = L.layerGroup();


//Lugares sobre los que se puede interactuar con popup

var Convento = L.marker([-0.2198965,-78.5173224]).bindPopup('Convento, CO.'),
    Manuel   = L.marker([-0.208751, -78.502700]).bindPopup('This Manuel, CO.');

var lugares = L.layerGroup([Convento, Manuel]); //Agrupa los lugares


//Configuración de los mapas base
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid2lsbWVyb2RyaWd1ZXoiLCJhIjoiY2tnbWZid3RuMm53NDJ4bDcxdjc4dmI4ZiJ9.1aBHLoxNVF4YAkVolAwX_w';


    var satelite  = L.tileLayer(mbUrl, {id: 'mapbox/satellite-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
      calles  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
      iluminado  = L.tileLayer(mbUrl, {id: 'mapbox/light-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
      //oscuro  = L.tileLayer(mbUrl, {id: 'mapbox/dark-v10', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
      //afueras  = L.tileLayer(mbUrl, {id: 'mapbox/outdoors-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    var  sateliteCalles  = L.tileLayer(mbUrl, {id: 'mapbox/satellite-streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
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
        center: [-2.180486, -79.8764937],
        zoom: 7,
        layers: satelite,
        fadeAnimation: true,
    });

function rem(){
  mymap.remove();
}
    function cargaMapa1(){
      mapaPratt.remove();
    var mymap = L.map('mapid', {
            center: [-2.180486, -79.8764937],
            zoom: 7,
            layers: [satelite, lugares],
            fadeAnimation: true,
        });
      }

    function cargaMapa2(){
      mymap.remove();
        var mapaPratt = L.map('mapid', {
                center: [-2.180486, -79.8764937],
                zoom: 7,
                layers: [satelite, lugares],
                fadeAnimation: true,
            });
    }



// Creación de paneles y mapas antiguos para luego superponerlos en el efecto de opacidad (mapa antiguo sobre el mapa base)

// Mapa de Nueva Granada em 1819
mymap.createPane('mapa1819');
mymap.getPane('mapa1819').style.zIndex = 300; //Coloca el mapa antiguo sobre todas las capas

  var newGranada1819 = L.tileLayer('https://mapwarper.net/maps/tile/54835/{z}/{x}/{y}.png', {
    pane: 'mapa1819',
    tileSize: 512,
    zoomOffset: -1,
    attribution: 'map warper'});

//Mapa de la Carta de Colombia en 1827
mymap.createPane('mapa1827');
mymap.getPane('mapa1827').style.zIndex = 299;

var colombia1827 = L.tileLayer('https://mapwarper.net/maps/tile/55558/{z}/{x}/{y}.png',{
  pane: 'mapa1827',
  tileSize: 512,
  detectRetina:true,
  zoomOffset: -1,
  attribution: 'map warper'});


  colombia1827.addTo(mymap); // Iniciar por defecto con Mapa Histórico de Colombia en 1827


//Función para cambiar los mapas superpuestos
function superPonerMapa(){
var leerValorMapa = document.getElementById("mapas").value;

if(leerValorMapa === "colombia1819"){
  colombia1827.remove();
  newGranada1819.addTo(mymap);
}
if(leerValorMapa === "colombia1827"){
  newGranada1819.remove();
  colombia1827.addTo(mymap);
}

}




// Mapas base para seleccionar

var baseMaps = {
/*
    "Satelite<div class='mapa-imagenes-selector'><img src='satelite.png' alt='Imagen de mapa de satelite' width='70px' height='50px'></div>": satelite,
    "Calles &nbsp;<div class='mapa-imagenes-selector'><img src='calles.png' alt='Imagen de mapa de calles ' width='70px' height='50px'></div>": calles,
    "Grises<div class='mapa-imagenes-selector'><img src='grises.png' alt='Imagen de mapa de grises' width='70px' height='50px'></div>": iluminado,
    //"Oscuro": oscuro,
    //"Afueras": afueras,
    "Juntos<div class='mapa-imagenes-selector'><img src='sateliteycalles.png' alt='Imagen de mapa de satelite y calles' width='70px' height='50px'></div>": sateliteCalles,
    "Agua<div class='mapa-imagenes-selector'><img src='sateliteycalles.png' alt='Imagen de mapa de satelite y calles' width='70px' height='50px'></div>": Stamen_Watercolor,
*/
    "Satelite":satelite,
    "Calles":calles,
    "Agua":Stamen_Watercolor,
    "Terrain": Stamen_Terrain,
    "Thunder":Thunderforest_Pioneer,
    //"Nueva Granada (1819)" : newGranada1819

};

var overlayMaps = {
    "Lugares": lugares,
};

L.control.layers(baseMaps).addTo(mymap);//Permite el control de cambio de mapas

//var trayecto;

//Creación de círculos para interactuar con lugares en el mapa base

var Guayaquil = L.circle([-2.180486, -79.8764937], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Guayaquil.bindPopup("<h2>James Diego Thomson inicia su recorrido por la Gran Colombia</h2> <b>Lugar:</b> Guayaquil <br><br> <b>Fecha:</b> 30 de septiembre - 12 de Octubre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 738 copias del Nuevo Testamento. En su carta relata que unas 12 personas lo leían en las calles de Guayaquil. Igualmente, relata que los sacerdotes y frailes de la región se interesaron por leer las Escrituras en español. <br><br> <b>Fuente:</b> <a href='https://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-5th-october-1824' target='_blank'> Carta del 5 de octubre, 1824</a> <br> &emsp; &emsp; &emsp; &ensp; <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guayaquil-11th-october-1824' target='_blank'> Carta del 11 de octubre, 1824</a>");

Guayaquil.bindTooltip("Guayaquil");

// Activa el popup para un evento en la línea de tiempo
var guayaquilLinea = document.getElementById('Guayaquil');
guayaquilLinea.addEventListener('click',guayaquilEvento,false);

function guayaquilEvento(event){
  Guayaquil.openPopup();
}

//L.circleMarker([-4.959213,-84.716197], { color: 'black', radius: 10}).addTo(mymap);


var rioGuayaquilBabahoyo = L.circle([-1.959213,-79.716197], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(mymap);

rioGuayaquilBabahoyo.bindPopup("<div class='ex1'> <b>Lugar:</b> Río Guayaquil-Babahoyo <br><br> <b>Fecha:</b> Octubre, 1824 <br><br> <b>Hechos:</b> <br> En el trayecto por el río a bordo de una canoa, se sucita un intercambio de ideas sobre la adoración a los santos, la iglesia Católica y la virgen María a partir de la lectura de algunos pasajes del Nuevo Testamento que Thomson distribuía. <br><br>Ejemplo de canoa de la época:<br><br> <div> <img src='Imagenes/canoa.png' alt='Imagen de canoa' border= '5px solid #555' width='90%' height='auto'> </div> <br><br>El siguiente audio es una recreación de una conversación que Thomson relata en su carta del 5 de octubre de 1824.<br><br> <audio controls><source src='DiscusionGuayaquilBabahoyo.mp3' type='audio/mpeg'> La versión del explorador no permite la reproducción del audio </audio><br><br> <b>Fuente:</b> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guaranda-25th-october-1824' target='_blank'> Carta del 5 de octubre, 1824</a> <br> &emsp; &emsp; &emsp; &ensp; </div> ");

rioGuayaquilBabahoyo.bindTooltip("Trayecto de río: Guayaquil a Babahoyo");

// Activa el popup para un evento en la línea de tiempo
var rioGuayaquilBabahoyoLinea = document.getElementById('rioGuayaquilBabahoyo');
rioGuayaquilBabahoyoLinea.addEventListener('click',rioGuayaquilBabahoyoEvento,false);

function rioGuayaquilBabahoyoEvento(event){
  rioGuayaquilBabahoyo.openPopup();
}

var Babahoyo = L.circle([-1.7975716,-79.5371457], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Babahoyo.bindPopup("<b>Lugar:</b> Babahoyo <br><br> <b>Fecha:</b> 15 al 19 de octubre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 51 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/riobamba-31st-october-1824' target='_blank'> Carta del 31 de octubre, 1824</a>");

Babahoyo.bindTooltip("Babahoyo");

// Activa el popup para un evento en la línea de tiempo
var babahoyoLinea = document.getElementById('Babahoyo');
babahoyoLinea.addEventListener('click',babahoyoEvento,false);



function babahoyoEvento(event){
  tray.addTo(mymap);
  Babahoyo.openPopup();
}


var Guaranda = L.circle([-1.5921547,-79.0021442], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Guaranda.bindPopup("<b>Lugar:</b> Guaranda <br><br> <b>Fecha:</b> 23 al 29 de octubre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 13 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/riobamba-31st-october-1824' target='_blank'> Carta del 31 de octubre, 1824</a>");

Guaranda.bindTooltip("Guaranda");

// Activa el popup para un evento en la línea de tiempo
var GuarandaLinea = document.getElementById('Guaranda');
GuarandaLinea.addEventListener('click',GuarandaEvento,false);

function GuarandaEvento(event){
  Guaranda.openPopup();
}

var Riobamba = L.circle([-1.6728729,-78.6489698], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Riobamba.bindPopup("<b>Lugar:</b> Riobamba <br><br> <b>Fecha:</b> 30 al 31 de octubre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 35 copias del Nuevo Testamento y le entrega 50 más al gobernador de Riobamba para repartirlas luego. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/riobamba-31st-october-1824' target='_blank'> Carta del 31 de octubre, 1824</a>");

Riobamba.bindTooltip("Riobamba");

// Activa el popup para un evento en la línea de tiempo
var RiobambaLinea = document.getElementById('Riobamba');
RiobambaLinea.addEventListener('click',RiobambaEvento,false);

function RiobambaEvento(event){
  Riobamba.openPopup();
}

var Ambato = L.circle([-1.2426281,-78.6277928], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Ambato.bindPopup("<b>Lugar:</b> Ambato <br><br> <b>Fecha:</b> 1 al 3 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 47 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a>");

Ambato.bindTooltip("Ambato");

// Activa el popup para un evento en la línea de tiempo
var AmbatoLinea = document.getElementById('Ambato');
AmbatoLinea.addEventListener('click',AmbatoEvento,false);

function AmbatoEvento(event){
  Ambato.openPopup();
}

var Latacunga = L.circle([-0.9343056,-78.6171347], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 15000
}).addTo(mymap);

Latacunga.bindPopup("<b>Lugar:</b> Latacunga <br><br> <b>Fecha:</b> 4 al 6 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 104 copias del Nuevo Testamento. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/25/quito-8th-november-1824' target='_blank'> Carta del 8 de noviembre, 1824</a>");

Latacunga.bindTooltip("Latacunga");

// Activa el popup para un evento en la línea de tiempo
var LatacungaLinea = document.getElementById('Latacunga');
LatacungaLinea.addEventListener('click',LatacungaEvento,false);

function LatacungaEvento(event){
  Latacunga.openPopup();
}

var Quito = L.circle([-0.22151199118554876, -78.5127311067427], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 25000
}).addTo(mymap);

Quito.bindPopup("<div class='ex1'> <b>Lugar:</b> Quito <br><br> <b>Fecha:</b> 7 al 24 de Noviembre, 1824 <br><br> <b>Hechos:</b> <br> Thomson vende 50 Nuevos Testamentos para ser usados en una escuela de tipo Lancasteriano que se estaba fundando en Quito.<br><br> Thomson propone establecer un colegio femenino. Para esto se necesitan fondos y Thomson se encarga de entregar una carta, a su llegada a Bogotá, con la petición de dichos fondos al vicepresidente de Colombia.  Esta carta es escrita por la marquesa de San José, algunas de sus amigas y el gobernador de Quito. <br><  br> Thomson vende 80 Nuevos Testamentos en las siguientes cantidades:<br><br> 50 para uso de las escuelas en Quito. <br> 25 para el Provincial del convento de San Francisco. <br> 5 para amigos personales.<br><br> Thomson ordena que 200 copias del Nuevo Testamento y 200 copias del libro de Salmos y proverbios sean enviadas a las diferentes ciudades que había visitado. <br><br> Thomson vende una copia del libro Evidencias del Cristianismo en español al Marqués de San José. Este lo lee con gran deleite y se lo presta a varios de sus amigos, los cuales los examinan detenidamente con satisfacción. Tal es el interés que se genera por este libro, que se decidió imprimir una edición de este por subscripción en Quito. Dicha subscripción era solo de mujeres. <br><br> Thomson entrega dos obras literarias de importancia en el Reino Unido, que llevaba consigo, a un clérigo profesor de una universidad en Quito que entendía el inglés. <br><br> <h3>Biblical Cyclopedia or dictionary of Holy Scriptures by William Jones (Escritor bautista galés)</h3> <br><br> <div> <img src='Imagenes/Biblical.png' border='3px solid #000' alt='Imagen de libro' width='97%' height='auto'>  </div> <a href='https://books.google.com.co/books?id=g0m3p2tphzoC&lpg=PP34&ots=wuFzZFTYsY&dq=Biblical%20Encyclopedia%20or%20dictionary%20of%20Holy%20Scriptures%20by%20William%20Jones&hl=es&pg=PP34#v=onepage&q&f=false' target='_blank'> Ver libro</a> <br><br> <h3>Elements of the philosophy of the human mind by Dugald Stewart </h3> <div> <img src='Imagenes/Elements.png' border='3px solid #000'alt='Imagen de libro' width='97%' height='auto'> </div> <a href='https://books.google.com.co/books?id=VGcAAAAAMAAJ&hl=es&pg=PP9#v=onepage&q&f=false' target='_blank'> Ver libro</a> <br> <br> <b>Fuente:</b> <a href='http://www.jamesdiegothomson.com/blog/2013/12/25/guaranda-25th-october-1824' target='_blank'> Carta del , 1824</a> <br> &emsp; &emsp; &emsp; &ensp; </div>");


Quito.bindTooltip("Quito");

// Activa el popup para un evento en la línea de tiempo
var QuitoLinea = document.getElementById('Quito');
QuitoLinea.addEventListener('click',QuitoEvento,false);

function QuitoEvento(event){
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
OtavaloLinea.addEventListener('click',OtavaloEvento,false);

function OtavaloEvento(event){
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
IbarraLinea.addEventListener('click',IbarraEvento,false);

function IbarraEvento(event){
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
TulcanLinea.addEventListener('click',TulcanEvento,false);

function TulcanEvento(event){
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
PastoLinea.addEventListener('click',PastoEvento,false);

function PastoEvento(event){
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
PopayanLinea.addEventListener('click',PopayanEvento,false);

function PopayanEvento(event){
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
GuanacasLinea.addEventListener('click',GuanacasEvento,false);

function GuanacasEvento(event){
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
PlataLinea.addEventListener('click',PlataEvento,false);

function PlataEvento(event){
Plata.openPopup();
}

var Neiva = L.circle([2.926438, -75.288807], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 10000
}).addTo(mymap);

Neiva.bindPopup("<b>Lugar:</b> Neiva <br><br> <b>Fecha:</b> Enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Neiva. <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 1 de marzo, 1825</a>");

Neiva.bindTooltip("Ibarra");

// Activa el popup para un evento en la línea de tiempo
var NeivaLinea = document.getElementById('Neiva');
NeivaLinea.addEventListener('click',NeivaEvento,false);

function NeivaEvento(event){
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
FusagasugaLinea.addEventListener('click',FusagasugaEvento,false);

function FusagasugaEvento(event){
Fusagasuga.openPopup();
}

var Bogota = L.circle([4.597895, -74.076014], {
    //color: 'black',
    fillColor: '#03f',
    fillOpacity: 0.5,
    radius: 30000
}).addTo(mymap);

Bogota.bindPopup("<div class='ex1'> <b>Lugar:</b> Bogota <br><br> <b>Fecha:</b> 29 de enero, 1825 <br><br> <b>Hechos:</b> <br> Thomson llega a Bogotá. <br><br> Thomson relata con alegría que se pudo establecer la Sociedad Bíblica Colombiana y que el acontecimiento tuvo mención en un periódico de circulación nacional llamado El Constitucional. Menciona que en las ediciones No 29, 30, 31 y 32 se pueden observar artículos relacionados con el establecimiento de esta sociedad. <br> <h3>El Constitucional No. 29</h3> <img src='Imagenes/Constitucional_N29.png' alt='Imagen del Numero 29 del Constitucional' width='100%' height='auto'> <h3>The Constitutional No. 29</h3> <img src='Imagenes/Constitutional_N29.png' alt='Imagen del Numero 29 del Constitucional' width='100%' height='auto'> <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-1st-march-1825' target='_blank'> Carta del 8 de febrero, 1825</a> <br><br> <b>Fuente:</b> <a href= 'http://www.jamesdiegothomson.com/blog/2013/12/24/bogot-5th-april-1825' target='_blank'> Carta del 5 de abril, 1825</a> </div>");

Bogota.bindTooltip("Bogota");

// Activa el popup para un evento en la línea de tiempo
var bogotaLinea = document.getElementById('Bogota');
bogotaLinea.addEventListener('click',bogotaEvento,false);

function bogotaEvento(event){
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
imageBounds = [[-8, -85.35], [15.05, -55.1]];
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

function transparencia(){

  //overlay.setOpacity(parseFloat(document.getElementById("opacity-slider").value)); // Obtiene el valor para la opacidad
  newGranada1819.setOpacity(parseFloat(document.getElementById("opacity-slider").value));
  colombia1827.setOpacity(parseFloat(document.getElementById("opacity-slider").value));

  document.getElementById("slider-value").innerHTML = parseFloat(document.getElementById("opacity-slider").value); // Muestra el valor de opacidad en la página

}





var popup = L.popup();
    popup.setLatLng([-4.580486, -83.2764937])
    popup.setContent("<h2> Oprime los círculos en esta línea de tiempo para obtener información de lo que sucedió en cada lugar. También, puedes oprimir los círculos azules sobre el mapa.</h2>")
    popup.openOn(mymap);