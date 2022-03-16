//DEFINE ARRAY OF ASTROSIGN

const zodiacSign = [

    {
        sign: 'Capricorn',
        char: 'Wario',
        image: '../idm231-dfl34/graphics/wario.jpg',
        text: "You is an extremely driven character. Ambitious, hardworking, and enterprising is one way to describe your desires, just like Wario's thrist for money. You are very anchored in your drives for goals, which allows you to go all out to achieve them.",
        audio: '../idm231-dfl34/sounds/wario.mp3',
        dateStart: ['12', '22'],
        dateEnd: ['1', '19']
    },

    {
        sign: 'Sagittarius',
        char: 'Donkey Kong',
        image: '../idm231-dfl34/graphics/donkey.jpg',
        text: 'You are both an adventurer and a risk-taker. Just like Donkey Kong, you will explore anywhere whether alone, or with friends. You are not afraid to take risks, even when it comes to things out of your comfort zone.',
        audio: '../idm231-dfl34/sounds/donkey.mp3',
        dateStart: ['11', '22'],
        dateEnd: ['12', '21']
    },

    {
        sign: 'Scorpio',
        char: 'Rosalina',
        image: '../idm231-dfl34/graphics/rosalina.jpg',
        text: 'You are a profound thinker. Like Rosalina, you often think about the universe. You can be secretive at times, but you are passionate about a lot of your goals.',
        audio: '../idm231-dfl34/sounds/rosalina.mp3',
        dateStart: ['10', '24'],
        dateEnd: ['11', '21']
    },

    {
        sign: 'Libra',
        char: 'Luigi',
        image: '../idm231-dfl34/graphics/luigi.jpg',
        text: 'You crave balance, just like Luigi in his mansion. You can be a little self-indulgent, but are a generous and kind soul at heart.',
        audio: '../idm231-dfl34/sounds/luigi.mp3',
        dateStart: ['9', '23'],
        dateEnd: ['10', '23']
    },

    {
        sign: 'Virgo',
        char: 'Toad',
        image: '../idm231-dfl34/graphics/toad.jpg',
        text: 'You are practical, sensible, and loyal. Just like Toad, you will always show up when your friends need support. You make an excellent friend.',
        audio: '../idm231-dfl34/sounds/toad.mp3',
        dateStart: ['8', '23'],
        dateEnd: ['9', '22']
    },

    {
        sign: 'Leo',
        char: 'Waluigi',
        image: '../idm231-dfl34/graphics/waluigi.jpg',
        text: 'You are proud and confident. Like Waluigi, you live life to the fullest rather than being in charge at home, work, and play.',
        audio: '../idm231-dfl34/sounds/waluigi.mp3',
        dateStart: ['7', '23'],
        dateEnd: ['8', '22']
    },

    {
        sign: 'Cancer',
        char: 'Peach',
        image: '../idm231-dfl34/graphics/peach.jpg',
        text: 'You are nurturing, sensitive, and compassionate. Like Peach, you care about other greatly. However, you are still self-protective and security-seeking, like Peach must be to avoid Bowser.',
        audio: '../idm231-dfl34/sounds/peach.mp3',
        dateStart: ['6', '22'],
        dateEnd: ['7', '22']
    },

    {
        sign: 'Gemini',
        char: 'Goomba',
        image: '../idm231-dfl34/graphics/goomba.jpg',
        text: 'You can be grumpy and aggressive, but also cooperative and kind. Some believe goombas to have a certain duality to them. Your mood can change on a whim, but your values are absolute.',
        audio: '../idm231-dfl34/sounds/goomba.mp3',
        dateStart: ['5', '21'],
        dateEnd: ['6', '21']
    },

    {
        sign: 'Taurus',
        char: 'Yoshi',
        image: '../idm231-dfl34/graphics/yoshi.jpg',
        text: 'You are stable and extremely sociable. Like Yoshi, you stive for greatness, but that can lead to neediness as well.',
        audio: '../idm231-dfl34/sounds/yoshi.mp3',
        dateStart: ['4', '20'],
        dateEnd: ['5', '20']
    },

    {
        sign: 'Aries',
        char: 'Mario',
        image: '../idm231-dfl34/graphics/mario.jpg',
        text: 'You are spontaneous and courageous. You have a sense of adventure and love to explore. Like Mario, you are determined and bold, and are good at resolving issues that come about.',
        audio: '../idm231-dfl34/sounds/mario.mp3',
        dateStart: ['3', '21'],
        dateEnd: ['4', '19']
    },

    {
        sign: 'Pisces',
        char: 'Daisy',
        image: '../idm231-dfl34/graphics/daisy.jpg',
        text: 'You are emotionally sensitive, gracious, and emotionally aware. Like Daisy, you are an empathetic figure to those around. People feel like they can trust you.',
        audio: '../idm231-dfl34/sounds/daisy.mp3',
        dateStart: ['2', '19'],
        dateEnd: ['3', '20']
    },

    {
        sign: 'Aquarius',
        char: 'Bowser',
        image: '../idm231-dfl34/graphics/bowser.jpg',
        text: 'You are advanced, self-reliant, clever, and exceptional. Like Bowser, you are always one step ahead of your opponents and can use your wit to outplay them.',
        audio: '../idm231-dfl34/sounds/bowser.mp3',
        dateStart: ['1', '20'],
        dateEnd: ['2', '18']
    }
];

// VARIABLES FOR TEXT

const sign = document.getElementById("sign");
const image = document.getElementById("image");
const text = document.getElementById("text");
const char = document.getElementById("char");
const audio = document.getElementById("audio");



// VARIABLES FOR INPUT CALENDAR

const userSubmitBtn = document.getElementById("userSubmit");
userSubmitBtn.addEventListener('click', function () {

    //console.log('Submit button was hit!')

    const usersFirstName = document.getElementById("name").value;
    //console.log('Users first name is ' + usersFirstName)

    const usersBday = new Date(document.getElementById("bday").value);
    //console.log('Users bday is ' + usersBday)

    const whichMonth = usersBday.getUTCMonth() + 1;
    //console.log('The month is ' + whichMonth);

    const whichDayOfMonth = usersBday.getUTCDate();
    //console.log('The day is ' + whichDayOfMonth);


    //ZODIAC ALGORITHM BUT FOR-LOOP AND SOOOO FLY
    for (let i = 0; i < zodiacSign.length; i++) {
        if ((whichMonth == zodiacSign[i].dateStart[0] && whichDayOfMonth >= zodiacSign[i].dateStart[1]) ||
            (whichMonth == zodiacSign[i].dateEnd[0] && whichDayOfMonth <= zodiacSign[i].dateEnd[1])) {

            //reveal zodiac img in html
            image.src = zodiacSign[i].image;

            //play audio
            audio.src = zodiacSign[i].audio;
            audio.play();

            //reveal zodiac text in html + say hi
            text.innerHTML = 'Hi ' + usersFirstName + '! You are  ' + zodiacSign[i].char + '! ' + zodiacSign[i].text;

            //reveal zodiac chracter in html
            char.innerHTML = 'YOU ARE ' + zodiacSign[i].char;

        }
    }

});

//MARIO POP UPS

const marioBtn = document.querySelectorAll('.mario-btn');
const marioPop =document.getElementById('mario-pop');

for (let i = 0; i < marioBtn.length; i++) {
    marioBtn[i].addEventListener("click", function() {
      marioPop.classList.toggle("hidden");
    });}

//LUIGI

const luigiBtn = document.querySelectorAll('.luigi-btn');
const luigiPop =document.getElementById('luigi-pop');

for (let i = 0; i < marioBtn.length; i++) {
    luigiBtn[i].addEventListener("click", function() {
      luigiPop.classList.toggle("hidden");
    });}

//WARIO

const warioBtn = document.querySelectorAll('.wario-btn');
const warioPop =document.getElementById('wario-pop');

for (let i = 0; i < marioBtn.length; i++) {
    warioBtn[i].addEventListener("click", function() {
      warioPop.classList.toggle("hidden");
    });}

//PEACH

const peachBtn = document.querySelectorAll('.peach-btn');
const peachPop =document.getElementById('peach-pop');

for (let i = 0; i < marioBtn.length; i++) {
    peachBtn[i].addEventListener("click", function() {
      peachPop.classList.toggle("hidden");
    });}

//WALUIGI

const waluigiBtn = document.querySelectorAll('.waluigi-btn');
const waluigiPop =document.getElementById('waluigi-pop');

for (let i = 0; i < marioBtn.length; i++) {
    waluigiBtn[i].addEventListener("click", function() {
      waluigiPop.classList.toggle("hidden");
    });}

//GOOMBA

const goombaBtn = document.querySelectorAll('.goomba-btn');
const goombaPop =document.getElementById('goomba-pop');

for (let i = 0; i < marioBtn.length; i++) {
    goombaBtn[i].addEventListener("click", function() {
      goombaPop.classList.toggle("hidden");
    });}

//YOSHI

const yoshiBtn = document.querySelectorAll('.yoshi-btn');
const yoshiPop =document.getElementById('yoshi-pop');

for (let i = 0; i < marioBtn.length; i++) {
    yoshiBtn[i].addEventListener("click", function() {
      yoshiPop.classList.toggle("hidden");
    });}

//DONKEY KONG

const dkBtn = document.querySelectorAll('.dk-btn');
const dkPop =document.getElementById('dk-pop');

for (let i = 0; i < marioBtn.length; i++) {
    dkBtn[i].addEventListener("click", function() {
      dkPop.classList.toggle("hidden");
    });}

//TOAD

const toadBtn = document.querySelectorAll('.toad-btn');
const toadPop =document.getElementById('toad-pop');

for (let i = 0; i < marioBtn.length; i++) {
    toadBtn[i].addEventListener("click", function() {
      toadPop.classList.toggle("hidden");
    });}

//ROSALINA

const rosaBtn = document.querySelectorAll('.rosalina-btn');
const rosaPop =document.getElementById('rosalina-pop');

for (let i = 0; i < marioBtn.length; i++) {
    rosaBtn[i].addEventListener("click", function() {
      rosaPop.classList.toggle("hidden");
    });}

//DAISY

const daisyBtn = document.querySelectorAll('.daisy-btn');
const daisyPop =document.getElementById('daisy-pop');

for (let i = 0; i < marioBtn.length; i++) {
    daisyBtn[i].addEventListener("click", function() {
      daisyPop.classList.toggle("hidden");
    });}

//BOWSER

const bowserBtn = document.querySelectorAll('.bowser-btn');
const bowserPop =document.getElementById('bowser-pop');

for (let i = 0; i < marioBtn.length; i++) {
    bowserBtn[i].addEventListener("click", function() {
      bowserPop.classList.toggle("hidden");
    });}

const helpBtn = document.querySelectorAll('.help-btn');
const helpPop =document.getElementById('help-pop');

for (let i = 0; i < marioBtn.length; i++) {
    helpBtn[i].addEventListener("click", function() {
      helpPop.classList.toggle("hidden");
    });}
