/* global game */

var Technotip = {};
 
Technotip.Menu = function(game){
    let numeroAle;
    let numeroAle2;
    let estrella
    let sustraerLetraInicial
    let palabra
    var lienzo2
    let letraPrecionada;
    let contadorImagenes
};
 
Technotip.Menu.prototype = {
     init:function(datosLink){
        this.puntos=0;
        contador= 0;

        arreNombre = ['1','2','3','4','5','6','7','8','9'] 
        arregloLetra=['a','b','c']
        this.estrella
        numeroSeleccionado=[]
        contadoBuenas = 0;
        activarWhile=true
        activarFinal=false
       

        palabrasSeleccionadas=[]
        letrasSeleccionadas=[]
        
        contadorImagenes=-1
        contadorBuenas=0;
    },
    preload:function(){  

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        
        /*Cargar sonidos de muy bien*/
        
        game.load.audio('instruccion','audio/Instrucciones.mp3')
        game.load.audio('sonMalo','audio/intenta_otra_vez.mp3')
        game.load.audio('muybien','audio/muy_bien.mp3')

        game.load.audio('1','audio/Uno.mp3')
        game.load.audio('2','audio/Dos.mp3')
        game.load.audio('3','audio/Tres.mp3')
        game.load.audio('4','audio/Cuatro.mp3')
        game.load.audio('5','audio/Cinco.mp3')
        game.load.audio('6','audio/Seis.mp3')
        game.load.audio('7','audio/Siete.mp3')
        game.load.audio('8','audio/Ocho.mp3')
        game.load.audio('9','audio/Nueve.mp3')

        /*Cargar las imagenes de bueno*/
    
     
        game.load.image('bocina','img/bocina.png')
        game.load.image('comenzar','img/cartas-31.png')
        game.load.atlasJSONHash('images','img/imagenes.png','img/imagenes.json');
        game.load.atlasJSONHash('caritas','img/caritas.png','img/caritas.json');

    },
    create:function(){

    
        this.instruccionesFx = this.add.audio('instruccion',1,false)
        muybienFX = this.add.audio('muybien',1,false)
        sonMaloFX = this.add.audio('sonMalo',1,false)
          
        this.game.stage.backgroundColor = "#ffffff";
        /*Codigo para el fondo*/
        fondo = game.add.sprite(0,0,'images','fondo');       
        this.generaFondo(fondo);    
        /*Se coloca las zonas que serviran como drop*/

        intrucciones= game.add.text(275,-95,"Los números, presiona los números en el teclado. \nIdentifica las cosas.", {
        fontSize: '26px', fill: '#404040'});
        iconoBocina = game.add.image(200,25, 'bocina')  
        iconoBocina.inputEnabled=true; 
        iconoBocina.input.useHandCursor = true; 
        iconoBocina.events.onInputOver.add(over, this);
        iconoBocina.events.onInputOut.add(out, this); 
        iconoBocina.scale.setTo(0.8)
        iconoBocina.events.onInputDown.add(this.clickIconoBocina, this);
        game.add.tween(intrucciones).to( { y: 25 }, 2000, Phaser.Easing.Bounce.Out, true);         

        function over(imagen){
           imagen.scale.setTo(0.75,0.75);
            
            //console.log(imagen.frameName+' | valor: '+imagen.valor);
            this.estoySobre=imagen;
        }
        function out(imagen){
             //console.log(imagen.frameName);
             imagen.scale.setTo(0.7,0.7);
           // this.estoySobre=null;
        }
        grupo = game.add.group();
        
    },  
    clickIconoBocina:function(){
        this.instruccionesFx.play()
    },
    /*Metodo update*/
    update:function(){ 
               
       
          game.input.keyboard.onUpCallback = function(key){
            if(key.keyCode === Phaser.KeyCode.ONE || key.keyCode === Phaser.KeyCode.NUMPAD_1){
              letraPrecionada = '1'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.TWO || key.keyCode === Phaser.KeyCode.NUMPAD_2){
              letraPrecionada = '2'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.THREE || key.keyCode === Phaser.KeyCode.NUMPAD_3){
              letraPrecionada = '3'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.FOUR || key.keyCode === Phaser.KeyCode.NUMPAD_4){
              letraPrecionada = '4'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.FIVE || key.keyCode === Phaser.KeyCode.NUMPAD_5){
              letraPrecionada = '5'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.SIX || key.keyCode === Phaser.KeyCode.NUMPAD_6){
              letraPrecionada = '6'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.SEVEN || key.keyCode === Phaser.KeyCode.NUMPAD_7){
              letraPrecionada = '7'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.EIGHT || key.keyCode === Phaser.KeyCode.NUMPAD_8){
              letraPrecionada = '8'
              numeroPresionado()
            }
            if(key.keyCode === Phaser.KeyCode.NINE || key.keyCode === Phaser.KeyCode.NUMPAD_9){
              letraPrecionada = '9'
              numeroPresionado()
            }

            function numeroPresionado(){
              grupo.kill()
              grupo = game.add.group();
              imagen1 = game.add.sprite(1150,680,'images',letraPrecionada);
              imagen1.key=  letraPrecionada//arreNombre[contadorImagenes]
              imagen1.anchor.setTo(0.5)
              imagen1.scale.setTo(0.5)

            
              numeroAle =Math.floor((Math.random() * 16))+1;
              sonFx = game.add.audio(letraPrecionada,1,false)
              sonFx.play()

                switch(letraPrecionada){
                  case '1':
                    imagen1 = game.add.sprite(650,400,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)
                    console.log('numero1')
                    break;
                  case '2':
                    imagen1 = game.add.sprite(450,440,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,440,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)

                    break;
                  case '3':
                    imagen1 = game.add.sprite(250,440,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,440,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(1050,440,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    grupo.add(imagen1)
                    break;
                  case '4':
                    imagen1 = game.add.sprite(200,350,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.9)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,350,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.9)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(400,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.9)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.9)
                    grupo.add(imagen1)
                    break;
                  case '5':

                    imagen1 = game.add.sprite(250,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(550,450,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(250,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)
                    break;
                  case '6':
                    imagen1 = game.add.sprite(250,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(550,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(550,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(250,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    break;
                  case '7':
                    imagen1 = game.add.sprite(250,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(550,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(1150,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(250,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(550,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(850,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)
                    break;
                  case '8':
                    imagen1 = game.add.sprite(150,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(400,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(900,300,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(150,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(400,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(900,600,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.7)
                    grupo.add(imagen1)
                    break;
                  case '9':
                    imagen1 = game.add.sprite(150,250,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(400,250,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,250,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(900,250,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(525,450,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(150,650,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(400,650,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(650,650,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)

                    imagen1 = game.add.sprite(900,650,'images',numeroAle+'_a');
                    imagen1.key=  numeroAle//arreNombre[contadorImagenes]
                    imagen1.anchor.setTo(0.5)
                    imagen1.scale.setTo(0.6)
                    grupo.add(imagen1)
                    break;
                }
            }
        
          }      

          
    },
     render:function(){
       
        
    },
   
  
    numeroAleatorio:function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    },

   
    generaFondo:function(imagen){
       //imagen = game.add.sprite(0,0,'fondo');
       imagen.height = game.height+100;
       imagen.width = game.width+100;
       imagen.anchor.x=0.5;
       imagen.anchor.y=0.5;
       imagen.x=game.width*0.5;
       imagen.y = game.height * 0.5;
    },
     numeroAleatorio3:function(de){
        return Math.floor((Math.random() * de) );
    },

// notedesanimes:function(){
    
//   var delay =500;
//   let arreglo = ['CS_correcta_1','CS_correcta_2','CS_correcta_3','CS_correcta_4','CS_correcta_5','CS_correcta_6']
            
//   estrella = game.add.sprite(game.width *0.5,game.height*0.5,'caritas',arreglo[this.numeroAleatorio3(5)]);
//   this.ajustaImagen2(estrella);
//   estrella.scale.setTo(0, 0);
//   estrella.x=game.width *0.5;
//   estrella.y=game.height*0.5;
               
//   var miTween=game.add.tween(estrella.scale).to({x:2,y:2},1000,Phaser.Easing.Bounce.Out,true,delay);
//   // miTween.onStart.add(this.onStart, this);
//   miTween.onComplete.add(borraIcono, this);
//   function borraIcono(){
//     this.muybienFX.play()
//   } 
                
//   setTimeout(this.termianr,5000)
          
// },

// lanzaEstrella:function(n){
           
//   var delay = 100;
            
       
//   if(n=='bueno'){
//     let arreglo = ['CS_correcta_1','CS_correcta_2','CS_correcta_3','CS_correcta_4','CS_correcta_5','CS_correcta_6']
       
//     estrella = game.add.sprite(game.width *0.5,game.height*0.5,'caritas',arreglo[this.numeroAleatorio3(5)]);
//     this.ajustaImagen2(estrella);
//     estrella.scale.setTo(0, 0);
//     estrella.x=game.width *0.5;
//     estrella.y=game.height*0.5;
               
//     var miTween=game.add.tween(estrella.scale).to({x:2,y:2},1000,Phaser.Easing.Bounce.Out,true,delay);
//     // miTween.onStart.add(this.onStart, this);
//     miTween.onComplete.add(borraIcono, this);
//     function borraIcono(){
//       estrella.destroy();
//     } 
//   }
//   else{
//     let arreglo = ['CS_incorrecta_1','CS_incorrecta_2','CS_incorrecta_3','CS_incorrecta_4','CS_incorrecta_5','CS_incorrecta_6']
            
//     estrella = game.add.sprite(game.width *0.5,game.height*0.5,'caritas',arreglo[this.numeroAleatorio3(5)]);
//     this.ajustaImagen2(estrella);
//     estrella.scale.setTo(0, 0);
//     estrella.x=game.width *0.5;
//     estrella.y=game.height*0.5;
               
//                 var miTween=game.add.tween(estrella.scale).to({x:2,y:2},1000,Phaser.Easing.Bounce.Out,true,delay);
//                 // miTween.onStart.add(this.onStart2, this);
//                 miTween.onComplete.add(borraIcono, this);
//                 function borraIcono(){
//                         estrella.destroy();
//                 } 
//             }
            
//             // setTimeout(function(){
//             //     imagen1.kill()
//             //     imagen2.kill()
//             //     estrella.kill()
//             //         activadorCronometro=true

//             // }, 2000)
             
//      },
    onStart:function(){    
        this.muybienFX.play()        
    },
    onStart2:function(){         
       this.sonMaloFX.play(); 
    },
    termianr:function(){
        
      game.state.start('Menu');
          
     },
     ajustaImagen: function(imagen){
       
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
     ajustaImagen2: function(imagen){
       imagen.width = imagen.width *3;
       imagen.heiht = imagen.height * 3;
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
     ajustaImagen3: function(imagen){
       imagen.width = imagen.width ;
       imagen.heiht = imagen.height;
       imagen.scale.setTo(1,1);
       imagen.anchor.setTo(0.5, 0.5);// anchor x y;
    },
    onClickRepetir:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        window.location = 'index.html';
    },
    onClickRegresar:function(){
        //game.bloque=1;
        //this.state.start('Menu');
        this.cancelaUpdate=false;
        this.state.start('Blue',true,false,this.datosSeccionAnterior);
       
    },
    onClicReiniciar:function(){
         this.cancelaUpdate=false;
         this.state.start('b1l5a2',true,false,this.datosSeccionAnterior);
    },
    onClickInicio:function(){
        this.cancelaUpdate=false;
        game.bloque=0;
        this.state.start('Menu');
    },
 
};





