//DEFINE ARRAY OF ASTROSIGN

const zodiacSign = [

    {
        sign: 'Capricorn',
        char: 'Wario',
        image: '#',
        text: 'Capricorns are greedy and lose at Mario Party.',
        dateStart: ['12', '22'],
        dateEnd: ['1', '19']
    },

    {
        sign: 'Sagittarius',
        char: 'Donkey Kong',
        image: '#',
        text: 'Being a Sagittarius means you are great at Mario Kart.',
        dateStart: ['11', '22'],
        dateEnd: ['12', '21']
    },

    {
        sign: 'Scorpio',
        char: 'Rosalina',
        image: '#',
        text: 'What game are you even from?',
        dateStart: ['10', '24'],
        dateEnd: ['11', '21']
    },

    {
        sign: 'Libra',
        char: 'Luigi',
        image: '#',
        text: 'You literally wear an L on your forehead.',
        dateStart: ['9', '23'],
        dateEnd: ['10', '23']
    },

    {
        sign: 'Virgo',
        char: 'Toad',
        image: '#',
        text: 'I personally think Toad is a cute lil guy.',
        dateStart: ['8', '23'],
        dateEnd: ['9', '22']
    },

    {
        sign: 'Leo',
        char: 'Waluigi',
        image: '#',
        text: 'Constantly reliquished to secondary games.',
        dateStart: ['7', '23'],
        dateEnd: ['8', '22']
    },

    {
        sign: 'Cancer',
        char: 'Peach',
        image: '#',
        text: 'Did you guys ever play the Super Princess Peach games? Those were my favorite as a kid. Got to save mario and all that. It was great.',
        dateStart: ['6', '22'],
        dateEnd: ['7', '22']
    },

    {
        sign: 'Gemini',
        char: 'Goomba',
        image: '#',
        text: 'Goomba is a 2 faced traitor who sides with Bowser only when necessary, but has been know to switch sides so he can participate in Mario Party.',
        dateStart: ['5', '21'],
        dateEnd: ['6', '21']
    },

    {
        sign: 'Taurus',
        char: 'Yoshi',
        image: '#',
        text: 'Yoshi is cool and all, but you ever notice how he is really just a disposable vehicle for mario, kinda sad.',
        dateStart: ['4', '20'],
        dateEnd: ['5', '20']
    },

    {
        sign: 'Aries',
        char: 'Mario',
        image: '#',
        text: 'True villian of the games.',
        dateStart: ['3', '21'],
        dateEnd: ['4', '19']
    },

    {
        sign: 'Pisces',
        char: 'Daisy',
        image: '#',
        text: 'Doesnt really have anything going for her, no solo games, no special traits, and she dates Luigi.',
        dateStart: ['2', '19'],
        dateEnd: ['3', '20']
    },

    {
        sign: 'Aquarius',
        char: 'Bowser',
        image: '#',
        text: 'Bowser is just a goofy little turtle.',
        dateStart: ['1', '20'],
        dateEnd: ['2', '18']
    }
];

// VARIABLES FOR TEXT

const sign = document.getElementById("sign");
const image = document.getElementById("image");
const text = document.getElementById("text");
const char = document.getElementById("char");
const hi = document.getElementById("hi");

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

            //reveal zodiac sign in html
            sign.innerHTML = zodiacSign[i].sign;

            //reveal zodiac img in html
            image.innerHTML = zodiacSign[i].image;

            //reveal zodiac text in html + say hi
            text.innerHTML = 'Hi ' + usersFirstName + '! You are a ' + zodiacSign[i].sign + ' which means your Mario character is ' + zodiacSign[i].char + '! ' + zodiacSign[i].text;

            //reveal zodiac chracter in html
            char.innerHTML = zodiacSign[i].char;

        }
    }

});





// if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
//     AstroSign = "Cap";
//   } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sag";
//   } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
//     AstroSign = "Sco";
//   } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
//     AstroSign = "Lib";
//   } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
//     AstroSign = "Vir";
//   } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
//     AstroSign = "Leo";
//   } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
//     AstroSign = "Can";
//   } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
//     AstroSign = "Gem";
//   } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
//     AstroSign = "Tau";
//   } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
//     AstroSign = "Ari";
//   } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
//     AstroSign = "Pis";
//   } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
//     AstroSign = "Aqu";
//   }
