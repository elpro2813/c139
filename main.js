/*Definir la variable img para contener el estado de este modelo y establecerla como vacío.*/ 
img ="";
/*Definir la variable objects y establecerla como unamatriz vacía.*/
objects = []
/*Definir la variable status es para mantener registro de si el modelo cocossd está cargado o no y establecerla como vacía.*/
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(380,380)
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Estado: detectando objetos";
}

/*Definir la función modelLoaded()*/
function modelLoaded() {
  /*Imprimir en la consola "¡Modelo cargado!"*/
  console.log("¡Modelo cargado!:)")
  /*Comprobar si la variable ‘status’ es verdad, (lo que significa que el modelo cocossd está cargado)*/
  status = true;KO
  /*Función predefinida de ml5.js utilizada para la detección de objetos */
  objectDetector.detect(img, gotResult);
}

/*Establecer la función gotResult con los parametros error y results */
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  /*Poner la variable que contiene la matriz */
  objects = results;
}


function draw() {
  image(img, 0, 0, 380, 380);
/*Si la variable estado no es igual a vacío... */
      if(status != "")
      {
      r =  random(255);
      g =  random(255);
      b =  random(255);
      objectDetector.detect(video, gotResult);
      for (i = 0; i < object.length; i++)  {
        document.getElementById("status").innerHTML = "Estado: objetos detectados";
        document.getElementById("number_of_objects").innerHTML = "numero de objetos detectados: "+ object.length;

          fill(r,g,b);
          percent = floor(objects[i].confidence * 100)
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke("r,g,b");
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
      }
    }
  }
