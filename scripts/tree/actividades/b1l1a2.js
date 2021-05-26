  Technotip.DibujoOculto = function(game){
    let numeroAle;
    let numeroAle2;

};

Technotip.DibujoOculto.prototype= {
    // aquí se agregan los metodos
    init:function(datosLink=null){ 
        this.puntos=0;
        contador= 0;
        arreImagenes = ['borrego','cerdo','elefante','gallina','gato','leon','pato','perro','vaca']
    },
    
    preload:function(){  

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
      
        /*Cargar sonidos de muy bien*/
        
        game.load.audio('instruccion','audio/Instrucciones_Que_animalito_es.mp3')
        game.load.audio('sonMalo','audio/intenta_otra_vez.mp3')
        game.load.audio('muybien','audio/muy_bien.mp3')

        game.load.audio('borrego','audio/borrego.mp3')
        game.load.audio('cerdo','audio/cerdo.mp3')
        game.load.audio('elefante','audio/elefante.mp3')
        game.load.audio('gallina','audio/gallina.mp3')
        game.load.audio('gato','audio/gato.mp3')
        game.load.audio('leon','audio/leon.mp3')
        game.load.audio('pato','audio/pato.mp3')
        game.load.audio('perro','audio/perro.mp3')
        game.load.audio('vaca','audio/vaca.mp3')
        /*Cargar las imagenes de bueno*/
        game.load.image('imgBuena1','img/CS_correcta_1.png');
        game.load.image('imgBuena2','img/CS_correcta_2.png');
        game.load.image('imgBuena3','img/CS_correcta_3.png');
        game.load.image('imgBuena4','img/CS_correcta_4.png');
        game.load.image('imgBuena5','img/CS_correcta_5.png');
        game.load.image('imgBuena6','img/CS_correcta_6.png');

        game.load.image('imgMala1','img/CS_incorrecta1.png');
        game.load.image('imgMala2','img/CS_incorrecta2.png');
        game.load.image('imgMala3','img/CS_incorrecta3.png');
        game.load.image('imgMala4','img/CS_incorrecta4.png');
        game.load.image('imgMala5','img/CS_incorrecta5.png');
        game.load.image('imgMala6','img/CS_incorrecta6.png');
        
        game.load.image('bocina','img/bocina.png')
        game.load.image('comenzar','img/comenzar.png')
        game.load.atlasJSONHash('images','img/imagenes.png','img/imagenes.json');

    },
    create:function(){
        this.instruccionesFx = this.add.audio('instruccion',1,false)
        this.muybienFX = this.add.audio('muybien',1,false)
        this.sonMaloFX = this.add.audio('sonMalo',1,false)
            
        
        this.game.stage.backgroundColor = "#ffffff";
        /*Codigo para el fondo*/
        fondo = game.add.sprite(0,0,'images','fondo');       
        this.generaFondo(fondo);    
        /*Se coloca las zonas que serviran como drop*/


        intrucciones= game.add.text(275,11,"Que animalito es, escucha el sonido y da clic en el \nanimalito que corresponda.", {
        fontSize: '23px', fill: '#404040'});
        iconoBocina = game.add.image(200,6, 'bocina')  
        iconoBocina.inputEnabled=true; 
        iconoBocina.input.useHandCursor = true; 
        iconoBocina.events.onInputOver.add(over, this);
        iconoBocina.events.onInputOut.add(out, this); 
        iconoBocina.scale.setTo(0.8)
        iconoBocina.events.onInputDown.add(this.clickIconoBocina, this);
        // game.add.tween(intrucciones).to( { y: 11 }, 2000, Phaser.Easing.Bounce.Out, true);
        
        
        txtTexto= game.add.text(650,160,"¿Qué animalito es?", {
        fontSize: '80px', fill: '#0000cc'});
        txtTexto.anchor.setTo(0.5)
        txtTexto.setShadow(5, 5, 'rgba(0, 0, 0, 0.5)', 5);

        numeroAle = this.numeroAleatorio3(arreImagenes.length)
        numeroAle2 = this.numeroAleatorio3(arreImagenes.length)

        if(numeroAle2==numeroAle){
            numeroAle2 = this.numeroAleatorio3(arreImagenes.length)
            if(numeroAle2==numeroAle){
                numeroAle2 = this.numeroAleatorio3(arreImagenes.length)       
                 if(numeroAle2==numeroAle){
                    numeroAle2 = this.numeroAleatorio3(arreImagenes.length)
                    if(numeroAle2==numeroAle){
                        numeroAle2 = this.numeroAleatorio3(arreImagenes.length)            
                    }            
                }     
            }
        }

        
        this.vacaFX = this.add.audio(arreImagenes[numeroAle],1,false)
        this.vacaFX.play()


        posicion = this.numeroAleatorio3(2)
        if(posicion==0){
            imagen1 = game.add.sprite(500,400,'images',arreImagenes[numeroAle]);
            imagen1.key=arreImagenes[numeroAle]
            imagen1.anchor.setTo(0.5)
            imagen1.inputEnabled=true;     
            imagen1.input.useHandCursor = true; 
            imagen1.events.onInputDown.add(this.evaluar, this);
            imagen2 = game.add.sprite(800,400,'images',arreImagenes[numeroAle2]);
            imagen2.anchor.setTo(0.5)
            imagen2.key=arreImagenes[numeroAle2]
            imagen2.inputEnabled=true;     
            imagen2.input.useHandCursor = true; 
            imagen2.events.onInputDown.add(this.evaluar, this);
        }
        else{
            imagen1 = game.add.sprite(500,400,'images',arreImagenes[numeroAle2]);
            imagen1.anchor.setTo(0.5)
            imagen1.key=arreImagenes[numeroAle2]
            imagen1.inputEnabled=true;     
            imagen1.input.useHandCursor = true; 
            imagen1.events.onInputDown.add(this.evaluar, this);
            imagen2 = game.add.sprite(800,400,'images',arreImagenes[numeroAle]);  
            imagen2.anchor.setTo(0.5) 
            imagen2.key=arreImagenes[numeroAle]
            imagen2.inputEnabled=true;     
            imagen2.input.useHandCursor = true; 
            imagen2.events.onInputDown.add(this.evaluar, this);
        }

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
       
        
        
        

    },  
    /*Metodo update*/
    update:function(){ 
            
           
         
		

        
    },

    clickIconoBocina:function(){
        this.instruccionesFx.play()
    },
     render:function(){
    
    },
   numeroAleatorio:function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
    },

    evaluar:function(n){
        if(n.key == arreImagenes[numeroAle]){
            this.lanzaEstrella();
        }
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
  


     
   notedesanimes:function(){
    
    
    
    
   var delay = 300;
            this.muybien = game.add.sprite(game.width * 0.5, game.height*0.5,'notedesanimes');
            this.ajustaImagen(this.muybien)
            this.muybien.scale.setTo(0.1, 0.1);
            this.muybien.x=game.width *0.5;
            this.muybien.y=game.height*0.5;
            
            game.add.tween(this.muybien,Phaser.Easing.Bounce.Out,true, delay)
            
            repetir = game.add.sprite(1100,400, 'repetir');
            this.ajustaImagen3(repetir);
            repetir.inputEnabled = true;
            repetir.input.useHandCursor = true;
            repetir.events.onInputDown.add(this.onClickRepetir,this);
            
           
           var miTween=game.add.tween(this.muybien.scale).to({x:1.3,y:1.3},500,Phaser.Easing.Bounce.Out,true,delay);
          miTween.onStart.add(this.onStart2, this);
          
     },
     
     lanzaEstrella:function(n){
           this.vacaFX.stop()
            var delay = 500;
       
            if(n='bueno'){
                let arreglo = ['imgBuena1','imgBuena2','imgBuena3','imgBuena4','imgBuena5','imgBuena6']
            
                this.estrella = game.add.sprite(game.width *0.5,game.height*0.5,arreglo[this.numeroAleatorio3(5)]);
                this.ajustaImagen2(this.estrella);
                this.estrella.scale.setTo(0, 0);
                this.estrella.x=game.width *0.5;
                this.estrella.y=game.height*0.5;
               
                var miTween=game.add.tween(this.estrella.scale).to({x:2,y:2},1000,Phaser.Easing.Bounce.Out,true,delay);
                miTween.onStart.add(this.onStart, this);
            }
            else{
                 let arreglo = ['imgMala1','imgMala2','imgMala3','imgMala4','mgMala5','mgMala6']
            
                this.estrella = game.add.sprite(game.width *0.5,game.height*0.5,arreglo[this.numeroAleatorio3(5)]);
                this.ajustaImagen2(this.estrella);
                this.estrella.scale.setTo(0, 0);
                this.estrella.x=game.width *0.5;
                this.estrella.y=game.height*0.5;
               
                var miTween=game.add.tween(this.estrella.scale).to({x:2,y:2},1000,Phaser.Easing.Bounce.Out,true,delay);
                miTween.onStart.add(this.onStart2, this);
            }
            
            setTimeout(this.termianr, 2000)
           
          
     },
    onStart:function(){    
        this.muybienFX.play()        
    },
    onStart2:function(){         
       this.sonMaloFX.play(); 
    },
    termianr:function(){
         game.state.start('b1l1a2',true,false,this.datosSeccionAnterior);
          
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
