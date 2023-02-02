const libOne = document.getElementById('lib-1');
const libTwo = document.getElementById('lib-2');
const libThree = document.getElementById('lib-3');
const padContainer = document.getElementById('pad-container');
let selectedLib;
//Audio element generator
function sound(src){
    this.sound = document.createElement('audio');//crea html de audio
    this.sound.src = src; //set el src para el link pased
    this.sound.setAttribute('preload', 'auto');//precarga el sonido
    this.sound.setAttribute('controls', 'none');
    this.sound.classList.add('clip')
    this.sound.style.display = 'none'//esconde el audio 
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play(); //play el sonido
    };
    this.stop = function(){
        this.sound.pause();
    };
}

//libreria
const libraryOne = [
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'),
        key: 'Q'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'),
        key: 'W'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'),
        key: 'E'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'),
        key: 'A'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'),
        key: 'S'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'),
        key: 'D'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'),
        key: 'Z'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'),
        key: 'X'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'),
        key: 'C'
      
    }
];

  const libraryTwo = [
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'),
        key: 'Q'
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'),
        key: 'W'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'),
        key: 'E'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'),
        key: 'A'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'),
        key: 'S'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'),
        key: 'D'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'),
        key: 'Z'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'),
        key: 'X'
      
    },
    {
        sound: new sound('https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'),
        key: 'C'
      
    }];
    const libraryThree = []
    //casos de eventos
    const pressKeyHandler = (e) => {
        switch (e.keyCode) {
            case 81:
                classClick('Q');
                const filterQ = selectedLib.filter((pad) => pad.key === 'Q');
                playSound(filterQ[0].sound);
                break;
            case 87:
                classClick('W');
                const filterW = selectedLib.filter((pad) => pad.key === 'W');
                playSound(filterW[0].sound);
                break;
            case 69:
                classClick('E');
                const filterE = selectedLib.filter((pad) => pad.key === 'E');
                playSound(filterE[0].sound);
                break;
            case 65:
                classClick('A');
                const filterA = selectedLib.filter((pad) => pad.key === 'A');
                playSound(filterA[0].sound);
                break;
            case 83:
                classClick('S');
                const filterS = selectedLib.filter((pad) => pad.key === 'S');
                playSound(filterS[0].sound);
                break;
            case 68:
                classClick('D');
                const filterD = selectedLib.filter((pad) => pad.key === 'D');
                playSound(filterD[0].sound);
                break;
            case 90:
                classClick('Z');
                const filterZ = selectedLib.filter((pad) => pad.key === 'Z');
                playSound(filterZ[0].sound);
                break;
            case 88:
                classClick('X');
                const filterX = selectedLib.filter((pad) => pad.key === 'X');
                playSound(filterX[0].sound);
                break;
            case 67:
                classClick('C');
                const filterC = selectedLib.filter((pad) => pad.key === 'C');
                playSound(filterC[0].sound);
                break;
            case 49:
                selectedLib = libraryOne;
                createPads(libraryOne);
                break;
            case 50:
                selectedLib = libraryTwo;
                createPads(libraryTwo);
                break;
            case 51:
                selectedLib = libraryThree;
                createPads(libraryThree);
                break;
            default:
                console.log(`${e.keyCode} does not have a function in this App\nDesigned and Developed by Ibán López`);
                break;
        }
    };
    //evento al precionar 
    document.addEventListener('keydown', pressKeyHandler);
    // crea el los votones 
    function newPad(pad) {
        const { sound, key } = pad;
        this.newPad = document.createElement('div');
        this.newPad.classList.add('drum-pad');
        this.newPad.setAttribute('id', key);
        this.newPad.setAttribute('type', 'button');
        this.newPad.innerText = key;
        this.newPad.onclick = () => {
            playSound(sound);
            classClick(key);
        };
        this.newPad.onmouseover = () => classHover(key);
        this.newPad.onmouseleave = () => {
            this.newPad.classList.remove('drum-pad-hover');
        };
        padContainer.appendChild(this.newPad);
    }

    // Play sound function
    const playSound = (sound) => { sound.play();};
    // Edit class when hover
    const classHover = (key) => { const pad = document.getElementById(key); pad.classList.add('drum-pad-hover');};

    // Edit class when clicking
    const classClick = (key) => { 
        const pad = document.getElementById(key); 
        pad.classList.add('drum-pad-clicked');
        setTimeout(() => {
            pad.classList.remove('drum-pad-clicked');
        }, 500);
    };

    const createPads = (library) => {
        while (padContainer.firstChild) {
            padContainer.removeChild(padContainer.lastChild);
        }
        library.map((pad) => {
            new newPad(pad);
        });
    };
    
    // Render library on first load
    window.onload = () => {
        selectedLib = libraryOne;
        createPads(libraryOne);
    };
    // Render libraries on click
    libOne.onclick = () => {
        selectedLib = libraryOne;
        createPads(libraryOne);
    };
    
    libTwo.onclick = () => {
        selectedLib = libraryTwo;
        createPads(libraryTwo);
    };

    libThree.onclick = () => {
        selectedLib = libraryThree;
        createPads(libraryThree);
    };