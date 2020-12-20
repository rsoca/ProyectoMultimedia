//variable pregunta 1 video 1
var choicePart = 18; 
var goodChoicePart = 18;
var badChoicePart = 7;
var goodChoiceChosen = false;

//variable pregunta 2 video 2
var tiemposalto = 18; 
var eleccioncorrecta = 18;
var eleccionmala = 5;
var eleccioncorrectaboolean = false;

//variables pregunta 2 video 1
var pregunta2time = 35;
var pregunta2salto = 36;
var pregunta2saltoatras= 22;
var pregunta2boolean = false;

//variables pregunta 2 video 2
var pregunta2video2time = 33;
var pregunta2video2salto = 33;
var pregunta2video2saltoatras= 24;
var pregunta2video2boolean = false;

//Variables preguntas
var question1Asked = false;
var question2Asked = false;
var video1;
var video2;
			
$(document).ready(function(){

	$.featherlight.defaults.afterClose = playPauseVideo;

	video1 = $('#video1');
	video2 = $('#video2');
	
	/*Icono galleta del final video 1 */
	$(".box1").on("click",function(){ 
		playPauseVideo(".receta1PopUp");
	});

	/*Icono magdalena del final video 2 */
	$(".box2").on("click",function(){ 
		playPauseVideo2(".receta2PopUp");

	});

	$(".goodChoice").on("click", function(){
		goodChoiceChosen = true; //se cambia al hacer la seleccion correcta
		//saltar en un punto del video
		$.featherlight.close(); //se cierra la ventana 
		video1[0].currentTime = goodChoicePart; //se va a esa parte del video
	});

	$(".badChoice").on("click", function(){
		$.featherlight.close(); //se cierra la ventana 
		video1[0].currentTime = badChoicePart; //se va a esa parte del video
		question1Asked = false;
	});

	$(".eleccioncorrecta2").on("click", function(){
		eleccioncorrectaboolean = true; //se cambia al hacer la seleccion correcta
		//saltar en un punto del video
		$.featherlight.close(); //se cierra la ventana 
		video2[0].currentTime = eleccioncorrecta; //se va a esa parte del video
	});

	$(".eleccionmala2").on("click", function(){
		$.featherlight.close(); //se cierra la ventana 
		video2[0].currentTime = eleccionmala; //se va a esa parte del video
		question2Asked = false;
	});


	$('#pepitas').on('keyup',function(){
        var input = this.value;    // Para que se guarden los valores que
        $('#pepitas').val(input);    // se van escribiendo
	});
	
	$('#muffins').on('keyup',function(){
        var input = this.value;    // Para que se guarden los valores que
        $('#muffins').val(input);    // se van escribiendo
    });

	$("#myBtn").on('click', function(){
		primerapregunta();
		$.featherlight.close();
	});

	$("#myBtn2").on('click', function(){
		segundapregunta();
		$.featherlight.close();
	});

	$(video1).on('timeupdate', function(){
		var currentTime = Math.round(this.currentTime);
		var durationNum = Math.round(this.duration);

		if(currentTime == choicePart && question1Asked == false){
			question1Asked = true;
			video1[0].pause();
			$.featherlight($(".popUpQuestion1")); //abre la pregunta 
		}

		if(currentTime == badChoicePart && goodChoiceChosen == true){
			video1[0].pause(); //se para en la mala decision si se 
			//ha elegido la buena
		}

		if(currentTime == 50 ){
			$('#box1').show();
		}

		if(currentTime == pregunta2time && pregunta2boolean == false){
			pregunta2boolean = true;
			video1[0].pause();
			$.featherlight($(".pregunta2PopUp"));
		}
	});

/* INTERACTIVIDAD VIDEO 2*/

	$(video2).on('timeupdate', function(){
		var currentTime = Math.round(this.currentTime);
		var durationNum = Math.round(this.duration);
		
		if(currentTime == tiemposalto && question2Asked == false){
			question2Asked = true;
			video2[0].pause();
			$.featherlight($(".popUpQuestion2")); //abre la pregunta 
		}

		if(currentTime == eleccionmala && eleccioncorrectaboolean == true){
			video2[0].pause(); //se para en la mala decision si se 
			//ha elegido la buena
		}
		if(currentTime == 60 ){
			$('#box2').show();
		}

		if(currentTime == pregunta2video2time && pregunta2video2boolean == false){
			pregunta2video2boolean = true;
			video2[0].pause();
			$.featherlight($(".preguntavideo2PopUp"));
		}
	});

});

function primerapregunta(){
	var pepitas= $('#pepitas').val();
        if(pepitas==2){
			alert("Correcto!!");
        }
        else{
			alert("Vuelve a intentarlo!!")
			pregunta2boolean = false;
			video1[0].currentTime = pregunta2saltoatras;
		}
}

function segundapregunta(){
	var muffins= $('#muffins').val();
        if(muffins==4){
			alert("Correcto!!");
        }
        else{
			alert("Vuelve a intentarlo!!")
			pregunta2video2boolean = false;
			video2[0].currentTime = pregunta2video2saltoatras;
		}
}

function playPauseVideo(popUp) {
	if(video1[0].paused){
		video1[0].play();
	}else{
		video1[0].pause();
		$.featherlight($(popUp));
	}
}

function playPauseVideo2(popUp) {
	if(video2[0].paused){
		video2[0].play();
	}else{
		video2[0].pause();
		$.featherlight($(popUp));
	}
}

function fn1(){
	var str = document.getElementById("text1").value;
	//alert("El valor es:" + str);

	if(str == "pepe"){
		alert("son igualessssssss");
	}else{
		alert("Esto no va (la buena)")
	}
}

