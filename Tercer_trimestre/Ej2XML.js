//1.Muestra el título de los CD
titulos = "";
n = document.getElementsByTagName("TITLE").length;
for (i = 0; i < n; i++)
    titulos += document.getElementsByTagName("TITLE")[i].childNodes[0].nodeValue + " <br> ";



//2.Muestra el precio

precios = "";
n = document.getElementsByTagName("PRICE").length;
for (i = 0; i < n; i++)
    precios += document.getElementsByTagName("PRICE")[i].childNodes[0].nodeValue + " <br> ";



//3.Muestra la compañía

compañias = "";
n = document.getElementsByTagName("COMPANY").length;
for (i = 0; i < n; i++)
    compañias += document.getElementsByTagName("COMPANY")[i].childNodes[0].nodeValue + " <br> ";