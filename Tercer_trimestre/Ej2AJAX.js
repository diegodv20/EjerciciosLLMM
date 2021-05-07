//Escribe un programa que muestre información meteorológica de una localidad de Huelva (o cualquier otra provincia de tu elección): 
//temperatura máxima y mínima, estado del cielo por tramo horario, dirección y velocidad del viento y humedad relativa.

//Temperatura maxima
document.getElementsByTagName("dia")[0].getElementsByTagName("temperatura")[0].getElementsByTagName("maxima")[0].childNodes[0].nodeValue;


//Temperatura minima
document.getElementsByTagName("dia")[0].getElementsByTagName("temperatura")[0].getElementsByTagName("minima")[0].childNodes[0].nodeValue;


//Estado del cielo por tramo horario
document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[2].attributes[0].value;
document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[2].attributes[1].value;

document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[4].attributes[0].value;
document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[4].attributes[1].value;

document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[5].attributes[0].value;
document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[5].attributes[1].value;

document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[6].attributes[0].value;
document.getElementsByTagName("dia")[0].getElementsByTagName("estado_cielo")[6].attributes[1].value;


//Direccion y velocidad del viento
document.getElementsByTagName("dia")[0].getElementsByTagName("viento")[2].getElementsByTagName("direccion")[0].childNodes[0].nodeValue;
document.getElementsByTagName("dia")[0].getElementsByTagName("viento")[2].getElementsByTagName("velocidad")[0].childNodes[0].nodeValue;


//Humedad relativa
document.getElementsByTagName("dia")[0].getElementsByTagName("humedad_relativa")[0].getElementsByTagName("maxima")[0].childNodes[0].nodeValue;
document.getElementsByTagName("dia")[0].getElementsByTagName("humedad_relativa")[0].getElementsByTagName("minima")[0].childNodes[0].nodeValue;