//DEFINE ARRAY OF ASTROSIGN

const zodiacSign = [

    {
        sign: 'Capricorn',
        char: 'Wario',
        image: '/graphics/wario.jpg',
        text: 'Capricorns are greedy and lose at Mario Party.',
        info: 'Wario is a greedy, greedy man. I heard he once took candy from a baby, and sold it back for a profit. Wario is motivated by money, like most people. His abilities include smelling bad.',
        dateStart: ['12', '22'],
        dateEnd: ['1', '19']
    },

    {
        sign: 'Sagittarius',
        char: 'Donkey Kong',
        image: '/graphics/donkey.jpg',
        text: 'Being a Sagittarius means you are great at Mario Kart.',
        info: 'Wario is a greedy, greedy man. I heard he once took candy from a baby, and sold it back for a profit. Wario is motivated by money, like most people. His abilities include smelling bad.',
        dateStart: ['11', '22'],
        dateEnd: ['12', '21']
    },

    {
        sign: 'Scorpio',
        char: 'Rosalina',
        image: '/graphics/rosalina.jpg',
        text: 'What game are you even from?',
        info: 'Mario loves to be number one, showing up on almost every game in his franchise. He is an ambitious protganist, who is always out to save the day. His abilities include using fireballs.',
        dateStart: ['10', '24'],
        dateEnd: ['11', '21']
    },

    {
        sign: 'Libra',
        char: 'Luigi',
        image: '/graphics/luigi.jpg',
        text: 'You literally wear an L on your forehead.',
        info: 'Luigi loves for things to be calm and balanced, but his mansion wrecks havoc on his life. He is shy and often pushed to the side for characters like Mario to get attention. His abilities include vacuuming ghosts.',
        dateStart: ['9', '23'],
        dateEnd: ['10', '23']
    },

    {
        sign: 'Virgo',
        char: 'Toad',
        image: '/graphics/',
        text: 'I personally think Toad is a cute lil guy.',
        info: 'Mario loves to be number one, showing up on almost every game in his franchise. He is an ambitious protganist, who is always out to save the day. His abilities include using fireballs.',
        dateStart: ['8', '23'],
        dateEnd: ['9', '22']
    },

    {
        sign: 'Leo',
        char: 'Waluigi',
        image: '#',
        text: 'Constantly reliquished to secondary games.',
        info: 'Waluigi loves to prank people. A fan favorite amongst the crowd, but often left out of games. He is known to be a real wild card, from everything from racing to tennis. His abilities include more than we could ever know.',
        dateStart: ['7', '23'],
        dateEnd: ['8', '22']
    },

    {
        sign: 'Cancer',
        char: 'Peach',
        image: '#',
        text: 'Did you guys ever play the Super Princess Peach games? Those were my favorite as a kid. Got to save mario and all that. It was great.',
        info: 'Peach has come to be known as a damsel in distress, but she is so much more. She is kind, athletic, and of course royalty. She even saves Mario in a few games of her own. Her abilities include using an umbrella.',
        dateStart: ['6', '22'],
        dateEnd: ['7', '22']
    },

    {
        sign: 'Gemini',
        char: 'Goomba',
        image: '#',
        text: 'Goomba is a 2 faced traitor who sides with Bowser only when necessary, but has been know to switch sides so he can participate in Mario Party.',
        info: 'Goomba is loved by all. Who could hate him? Goombas love to hang out with each other and can often be found stacking on top of each other to fight against Mario. Goomba has been known to work for Bowser, but switches sides depending on how he is feeling. His abilities include being a glass canon.',
        dateStart: ['5', '21'],
        dateEnd: ['6', '21']
    },

    {
        sign: 'Taurus',
        char: 'Yoshi',
        image: '#',
        text: 'Yoshi is cool and all, but you ever notice how he is really just a disposable vehicle for mario, kinda sad.',
        info: 'Yoshi has been known to be a fun and cooperative character! He is always willing to help others. He is known to steal food from the other characters when they are not looking. His abilities include being able to run on air.',
        dateStart: ['4', '20'],
        dateEnd: ['5', '20']
    },

    {
        sign: 'Aries',
        char: 'Mario',
        image: '#',
        text: 'True villian of the games.',
        info: 'Mario loves to be number one, showing up on almost every game in his franchise. He is an ambitious protganist, who is always out to save the day. His abilities include using fireballs.',
        dateStart: ['3', '21'],
        dateEnd: ['4', '19']
    },

    {
        sign: 'Pisces',
        char: 'Daisy',
        image: '#',
        text: 'Doesnt really have anything going for her, no solo games, no special traits, and she dates Luigi.',
        info: 'Mario loves to be number one, showing up on almost every game in his franchise. He is an ambitious protganist, who is always out to save the day. His abilities include using fireballs.',
        dateStart: ['2', '19'],
        dateEnd: ['3', '20']
    },

    {
        sign: 'Aquarius',
        char: 'Bowser',
        image: '#',
        text: 'Bowser is just a goofy little turtle.',
        info: 'Mario loves to be number one, showing up on almost every game in his franchise. He is an ambitious protganist, who is always out to save the day. His abilities include using fireballs.',
        dateStart: ['1', '20'],
        dateEnd: ['2', '18']
    }
];

// VARIABLES FOR TEXT

const sign = document.getElementById("sign");
const image = document.getElementById("image").src;
const text = document.getElementById("text");
const char = document.getElementById("char");
const hi = document.getElementById("hi");

const infoHeader = document.getElementById("info-header");
const info = document.getElementById("info");

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
            image.innerHTML = zodiacSign[i].image;
            console.log(zodiacSign[i].image);

            //reveal zodiac text in html + say hi
            text.innerHTML = 'Hi ' + usersFirstName + '! You are  ' + zodiacSign[i].char + '! ' + zodiacSign[i].text;

            //reveal zodiac chracter in html
            char.innerHTML = zodiacSign[i].char;

        }
    }

});


// variables for info on characters 

//DOES NOT WORK FIND OUT WHY OR CHANGE IT
const popUp = document.getElementById("pop");

const btnMario = document.querySelectorAll("bowser-btn");
btnMario.addEventListener('click', function () {
    popUp.classList.toggle("hidden")
    infoHeader.innerHTML = zodiacSign[11].char;
    info.innerHTML = zodiacSign[11].info;
});