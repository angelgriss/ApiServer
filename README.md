# ApiServer

El archivo server.js levanta un servidor en el puerto 8081 el cual disponibiliza 3 apis:

1 GET Estados:
  http://localhost:8081/states
  
2 GET Ciudades:
  http://localhost:8081/cities/TUxCUEFDUkVkNTU
  
3 GET Barrios:
  http://localhost:8081/neighborhoods/TUxCQ0FDUjE3MzI5
  
Las tres apis consumen las apis de estados, ciudades y barrios respectivamente de MercadoLibre solo que filtran la informacion extra y solo retornan el array de lo solicitado.
