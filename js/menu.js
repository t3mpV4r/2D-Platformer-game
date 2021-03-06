var menuState = {
    create: function() {
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        game.add.image(0, 0, 'bg');
        var jabolka = game.add.sprite(game.world.centerX, 200, 'apple');
        var krusa =  game.add.sprite(game.world.centerX + 80, 200, 'krusa');
        var banana = game.add.sprite(game.world.centerX + 160, 200, 'banana');
        jabolka.height *= 2;
        jabolka.width *= 2; 
        krusa.height *= 2;
        krusa.width *= 2;
        banana.height *= 2;
        banana.width *= 2;
        var igrac = game.add.sprite(game.world.centerX, -50, 'igrac');      
        igrac.anchor.setTo(0.5, 0.5);
        igrac.height *= 2;
        igrac.width *= 2;    
        /* tweens, svojstvo za vizuelni efekti
         go pridvizuva naslovot do 300px za vreme  od 1s(1000ms) 
         default e konstantna brzina, easing - funkcija za dopolnitelni efekti 
        */
        game.add.tween(igrac).to({y:700},1000).easing(Phaser.Easing.Bounce.Out).start();

        game.add.text(game.world.centerX-280, game.world.centerY -110,
                      'движење на играч: ',
                      { font: '30px Arial', fill: '#ffffff' });

        game.add.sprite(game.world.centerX , game.world.centerY -150, 'strelki');
        game.add.sprite(game.world.centerX +150, game.world.centerY -150, 'wasd');

        game.add.text(game.world.centerX-200, game.world.centerY- 20,
                      'пукање: ',
                      { font: '30px Arial', fill: '#ffffff' });

        game.add.sprite(game.world.centerX , game.world.centerY- 20, 'space');


        var startuvaj = game.add.text(game.world.centerX - 200, game.world.centerY + 90,
                                      'клик за Старт или:',
                                      { font: '40px Arial', fill: '#ffffff' });
        startuvaj.anchor.setTo(0.5, 0.5);

        /*
            1. ja rotira labelata za -2 stepeni za vreme od  pola sekunda
            2. ja rotira labelata za +2 stepeni za vreme od  pola sekunda
          3. beskonecen ciklus
            4. vkluci go seto toa so povik na start();
        */   
        game.add.tween(startuvaj).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();

        game.add.sprite(game.world.centerX , game.world.centerY+70, 'enter');

        // promenliva za prifakjanje na user input (dolna strelka)    
        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);


        /*
            onDown.addOnce(contexFunction, context);
            Koga e pritistano soodvetnoto kopce, povikaj ja navedenata contexFunction
            ili na click od mouse
        */
        key.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start,this);


    },
    start: function() {
        // Startuvaj ja igrata
        game.state.start('level1');
    }
};
