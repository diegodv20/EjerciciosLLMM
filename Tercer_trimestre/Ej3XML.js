//1.Título del primer libro
document.getElementsByTagName("title")[0].childNodes[0].nodeValue;


//2.Todos los títulos
titulos = "";
n = document.getElementsByTagName("title").length;
for (i = 0; i < n; i++)
    titulos += document.getElementsByTagName("title")[i].childNodes[0].nodeValue + " <br> ";




//3.Número de atributos del cuarto libro
document.getElementsByTagName("book")[3].attributes.length;



//4.Valor de los atributos del cuarto libro
l = document.getElementsByTagName("book")[3].attributes.length;
a = document.getElementsByTagName("book")[3].attributes
for (i = 0; i < l; i++)
    console.log(a[i].nodeValue);




//5.Número de autores del tercer libro
document.getElementsByTagName("book")[2].getElementsByTagName('author').length;



//6.Autores del tercer libro
l = document.getElementsByTagName("book")[2].getElementsByTagName('author').length;
a = document.getElementsByTagName("book")[2].getElementsByTagName('author')
for (i = 0; i < l; i++)
    console.log(a[i].childNodes[0].nodeValue);




//7.Muestra una tabla que muestre el título, primer autor, precio y año
tabla = "";
l = document.getElementsByTagName("book").length;
for (i = 0; i < l; i++)
    tabla += "<tr>" + "<td>" + document.getElementsByTagName("title")[i].childNodes[0].nodeValue + "</td>" +
    "<td>" + document.getElementsByTagName("author")[i].childNodes[0].nodeValue + "</td>" +
    "<td>" + document.getElementsByTagName("price")[i].childNodes[0].nodeValue + "</td>" +
    "<td>" + document.getElementsByTagName("year")[i].childNodes[0].nodeValue + "</td>" + "</tr>";