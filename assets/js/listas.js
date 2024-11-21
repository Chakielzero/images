// Lista de juegos
const juegos = [
    {
        id: "007 Legends",
        imgSrc: "assets/img/007legends.jpg",
        altText: "007 Legends",
        title: "007™ Legends (EU).wua",
        downloadLink2: "https://cuty.io/T4bzUh" // Segundo enlace de descarga
    },       
    {
        id: "Adventure Time Explore the Dungeon Because I Don't Know!",
        imgSrc: "assets/img/horadeaventura.jpg",
        altText: "Adventure Time Explore the Dungeon Because I Don't Know!",
        title: "Adventure Time Explore the Dungeon Because I Don't Know! (EU) (v16).wua",
        downloadLink2: "https://cuty.io/CE1hce" // Segundo enlace de descarga

    },
    {
        id: "Adventure Time Finn and Jake Investigations",
        imgSrc: "assets/img/horadeaventurainvestigations.jpg",
        altText: "Adventure Time Finn and Jake Investigations",
        title: "Adventure Time Finn and Jake Investigations (USA) (DLC) (v16).wua",
        downloadLink2: "https://cuty.io/U9PqzN" // Segundo enlace de descarga

    },
    {
        id: "Assassin's Creed III",
        imgSrc: "assets/img/asscred3.jpg",
        altText: "Assassin's Creed III",
        title: "Assassin's Creed III (USA) (DLC) (v80).wua",
        downloadLink2: "https://cuty.io/RnFCoBN7s1e" // Segundo enlace de descarga

    },
    {
        id: "Assassin's Creed IV Black Flag",
        imgSrc: "assets/img/asscreedbf.jpg",
        altText: "Assassin's Creed IV Black Flag",
        title: "Assassin's Creed IV Black Flag (USA) (v32).wua",
        downloadLink2: "https://cuty.io/jkPbIc3q" // Segundo enlace de descarga

    },
    {
        id: "Batman Arkham City Armored Edition",
        imgSrc: "assets/img/batmancity.jpg",
        altText: "Batman Arkham City Armored Edition",
        title: "Batman Arkham City - Armored Edition (USA).wua",
        downloadLink2: "https://cuty.io/47mIhvds" // Segundo enlace de descarga

    },
    {
        id: "Batman Arkham Origins",
        imgSrc: "assets/img/batmanorigins.jpg",
        altText: "Batman Arkham Origins",
        title: "Batman - Arkham Origins (USA) (DLC) (v16).wua",
        downloadLink2: "https://cuty.io/PM1CpBiAk" // Segundo enlace de descarga


    },
    {
        id: "BAYONETTA 2",
        imgSrc: "assets/img/bayonetta2.jpg",
        altText: "BAYONETTA 2",
        title: "BAYONETTA 2 (EU).wua",
        downloadLink2: "https://cuty.io/0Z9mKy7ov1zk" // Segundo enlace de descarga

    },
    {
        id: "BEN 10 OMNIVERSE 2",
        imgSrc: "assets/img/ben10omniverse2.jpg",
        altText: "BEN 10 OMNIVERSE 2",
        title: "BEN 10 OMNIVERSE 2 (USA).wua",
        downloadLink2: "https://cuty.io/lxnUFtiMnWF" // Segundo enlace de descarga

    },
    {
        id: "Call of Duty Black Ops II",
        imgSrc: "assets/img/codblackops2.jpg",
        altText: "Call of Duty Black Ops II",
        title: "Call of Duty Black Ops II (EU).wua",
        downloadLink2: "https://cuty.io/51fYy47O" // Segundo enlace de descarga

    },
    {
        id: "Call of Duty Ghosts",
        imgSrc: "assets/img/codghost.jpg",
        altText: "Call of Duty Ghosts",
        title: "Call of Duty Ghosts (USA) (DLC) (v112).wua",
        downloadLink2: "https://cuty.io/jHnXCyB" // Segundo enlace de descarga

    },
    {
        id: "Captain Toad Treasure Tracker",
        imgSrc: "assets/img/capitaintoad.jpg",
        altText: "Captain Toad Treasure Tracker",
        title: "Captain Toad Treasure Tracker (EE.UU.) (v16).wua",
        downloadLink2: "https://cuty.io/R6CKNk" // Segundo enlace de descarga

    },
    {
        id: "Cars 3 Driven to Win",
        imgSrc: "assets/img/cars3.jpg",
        altText: "Cars 3 Driven to Win",
        title: "Cars 3 Driven to Win (USA) (v16).wua",
        downloadLink2: "https://cuty.io/OzVP7rjodJ" // Segundo enlace de descarga

    },
    {
        id: "Darksiders",
        imgSrc: "assets/img/darksiders.jpg",
        altText: "Darksiders",
        title: "Darksiders (US).wua",
        downloadLink2: "https://cuty.io/dOzQNCDccii2" // Segundo enlace de descarga

    },
    {
        id: "Darksiders II",
        imgSrc: "assets/img/darksiders2.jpg",
        altText: "Darksiders II",
        title: "Darksiders II (US).wua",
        downloadLink2: "https://cuty.io/Y4jLZM" // Segundo enlace de descarga

    },
    {
        id: "DEUS EX HUMAN REV. DIRECTOR'S CUT",
        imgSrc: "assets/img/deusex.jpg",
        altText: "DEUS EX HUMAN REV. DIRECTOR'S CUT",
        title: "DEUS EX HUMAN REV. DIRECTOR'S CUT (USA).wua",
        downloadLink2: "https://cuty.io/FHfLCJCjOsyR" // Segundo enlace de descarga

    },
    {
        id: "Disney Epic Mickey 2",
        imgSrc: "assets/img/disneyepicmickey2.jpg",
        altText: "Disney Epic Mickey 2",
        title: "Disney Epic Mickey 2 (USA).wua",
        downloadLink2: "https://cuty.io/uU2tm4HE" // Segundo enlace de descarga

    },
    {
        id: "Donkey kong tropical freeze",
        imgSrc: "assets/img/donkeykongtf.jpg",
        altText: "Donkey Kong Tropical Freeze",
        title: "DKC Tropical Freeze (US).wua",
        downloadLink2: "https://cuty.io/yBDk" // Segundo enlace de descarga

    },
    {
        id: "Ducktales Remastered",
        imgSrc: "assets/img/ducktales.jpg",
        altText: "Ducktales Remastered",
        title: "DuckTales Remastered (US) (v32).wua",
        downloadLink2: "https://cuty.io/w22EQS6" // Segundo enlace de descarga

    },
    {
        id: "F1 race stars powered up edition",
        imgSrc: "assets/img/f1racestars.jpg",
        altText: "F1 RACE STARS - POWERED UP EDITION",
        title: "F1 RACE STARS - POWERED UP EDITION (USA).wua",
        downloadLink2: "https://cuty.io/BuF6mYw4W" // Segundo enlace de descarga

    },
    {
        id: "Fast racing neo",
        imgSrc: "assets/img/fastracing.jpg",
        altText: "Fast Racing Neo",
        title: "FAST Racing NEO (USA) (DLC) (v65).wua",
        downloadLink2: "https://cuty.io/Erz0ckCc" // Segundo enlace de descarga

    },
    {
        id: "FIFA Soccer 13",
        imgSrc: "assets/img/fifa13.jpg",
        altText: "FIFA Soccer 13",
        title: "FIFA Soccer 13 (USA).wua",
        downloadLink2: "https://cuty.io/Cnsi" // Segundo enlace de descarga

    },
    {
        id: "Injustice Gods Among Us",
        imgSrc: "assets/img/injustice.jpg",
        altText: "Injustice Gods Among Us",
        title: "Injustice Gods Among Us (EU) (v16).wua",
        downloadLink2: "https://cuty.io/2y6nsyjeWo" // Segundo enlace de descarga

    },
    {
        id: "LEGO Batman 3 Beyond Gotham",
        imgSrc: "assets/img/legobatman3.jpg",
        altText: "LEGO Batman 3 Beyond Gotham",
        title: "LEGO Batman 3 - Beyond Gotham (USA) (v48).wua",
        downloadLink2: "https://cuty.io/4WgXzW" // Segundo enlace de descarga

    },
    {
        id: "Lego Marvels Avengers",
        imgSrc: "assets/img/legoavengers.jpg",
        altText: "Lego Marvels Avengers",
        title: "LEGO MARVEL's Avengers (USA) (DLC) (v64).wua",
        downloadLink2: "https://cuty.io/w6MWa" // Segundo enlace de descarga

    },
    {
        id: "Mario y Sonic at the Rio 2016 Olympic Games",
        imgSrc: "assets/img/marioysonic2016.jpg",
        altText: "Mario y Sonic at the Rio 2016 Olympic Games",
        title: "Mario & Sonic at the Rio 2016 - Olympic Games (USA) (v16).wua",
        downloadLink2: "https://cuty.io/hnPuJL" // Segundo enlace de descarga

    },
    {
        id: "Mario y sonic sochi 2014",
        imgSrc: "assets/img/marioysonicsochi2014.jpg",
        altText: "Mario y sonic sochi 2014",
        title: "MARIO & SONIC SOCHI 2014 (EU) (v32).wua",
        downloadLink2: "https://cuty.io/t4ojp" // Segundo enlace de descarga

    },
    {
        id: "Mario Kart 8",
        imgSrc: "assets/img/mariokart8.jpg",
        altText: "Mario Kart 8",
        title: "MARIO KART 8 (US) (v64).wua",
        downloadLink2: "https://cuty.io/SEf2dQuX" // Segundo enlace de descarga

    },
    {
        id: "Mario Party 10",
        imgSrc: "assets/img/marioparty10.jpg",
        altText: "Mario Party 10",
        title: "Mario Party 10 (USA) (v16).wua",
        downloadLink2: "https://cuty.io/0XIMRUokCxZh" // Segundo enlace de descarga

    },
    {
        id: "Mario Tennis Ultra Smash",
        imgSrc: "assets/img/mariotennisultrasmash.jpg",
        altText: "Mario Tennis Ultra Smash",
        title: "Mario Tennis - Ultra Smash (USA) (En,Fr,Es).wux",
        downloadLink2: "https://cuty.io/l63prPj" // Segundo enlace de descarga

    },
    {
        id: "Mario vs. Donkey Kong Tipping Stars",
        imgSrc: "assets/img/mariovsdonkey.jpg",
        altText: "Mario vs. Donkey Kong Tipping Stars",
        title: "Mario vs. Donkey Kong Tipping Stars (USA).wua",
        downloadLink2: "https://cuty.io/p9gD" // Segundo enlace de descarga

    },
    {
        id: "MONSTER HUNTER 3 ULTIMATE",
        imgSrc: "assets/img/monsterhunter3.jpg",
        altText: "MONSTER HUNTER 3 ULTIMATE",
        title: "MONSTER HUNTER 3 ULTIMATE (USA) (v32).wua",
        downloadLink2: "https://cuty.io/m12qZUnoOjFP" // Segundo enlace de descarga

    },
    {
        id: "Need for Speed Most Wanted U",
        imgSrc: "assets/img/nfsmw2012.jpg",
        altText: "Need for Speed Most Wanted U",
        title: "Need for Speed Most Wanted U (USA) (v32).wua",
        downloadLink2: "https://cuty.io/dGfeO4EVbPGR" // Segundo enlace de descarga

    },
    {
        id: "New Super Mario Bros U",
        imgSrc: "assets/img/nsmbu.jpg",
        altText: "New Super Mario Bros U",
        title: "New SUPER MARIO BROS. U (USA) (DLC) (v64).wua",
        downloadLink2: "https://cuty.io/Pl0mQVlduJ3r" // Segundo enlace de descarga

    },
    {
        id: "Ninja Gaiden 3",
        imgSrc: "assets/img/ninjagaiden3.jpg",
        altText: "Ninja Gaiden 3",
        title: "NINJA GAIDEN 3 Razor's Edge (US) (v80).wua",
        downloadLink2: "https://cuty.io/vpzumGPrYUHI" // Segundo enlace de descarga

    },
    {
        id: "ONE PIECE Unlimited World Red",
        imgSrc: "assets/img/onepieceworldred.jpg",
        altText: "ONE PIECE Unlimited World Red",
        title: "ONE PIECE Unlimited World Red (US).wua",
        downloadLink2: "https://cuty.io/tP5iPNfI9nt" // Segundo enlace de descarga

    },
    {
        id: "PAPER MARIO Color Splash",
        imgSrc: "assets/img/papercolorsplash.jpg",
        altText: "PAPER MARIO Color Splash",
        title: "PAPER MARIO Color Splash (USA).wua",
        downloadLink2: "https://cuty.io/bGAjx6AtLm" // Segundo enlace de descarga

    },
    {
        id: "Penguins of Madagascar",
        imgSrc: "assets/img/pinguinosmadagascar.jpg",
        altText: "Penguins of Madagascar",
        title: "Penguins of Madagascar (USA).wua",
        downloadLink2: "https://cuty.io/zwvhL5a" // Segundo enlace de descarga

    },
    {
        id: "Phineas and Ferb Quest for Cool Stuff",
        imgSrc: "assets/img/Phiniasyferb.jpg",
        altText: "Phineas and Ferb Quest for Cool Stuff",
        title: "Phineas and Ferb - Quest for Cool Stuff (USA).wua",
        downloadLink2: "https://cuty.io/N5bg8" // Segundo enlace de descarga

    },
    {
        id: "PIKMIN 3",
        imgSrc: "assets/img/pikmin3.jpg",
        altText: "PIKMIN 3",
        title: "PIKMIN 3 (USA) (DLC) (v96).wua",
        downloadLink2: "https://cuty.io/OCWO5nTjTAyg" // Segundo enlace de descarga

    },
    {
        id: "Pokémon Rumble U",
        imgSrc: "assets/img/pokemonrumbleu.jpg",
        altText: "Pokémon Rumble Ur",
        title: "Pokémon Rumble U (World).wua",
        downloadLink2: "https://cuty.io/VnANF3IlsTQ" // Segundo enlace de descarga

    },
    {
        id: "Pokemon Tournament",
        imgSrc: "assets/img/pokemontournament.jpg",
        altText: "Pokemon Tournament",
        title: "POKKÉN TOURNAMENT (USA) (v64).wua",
        downloadLink2: "https://cuty.io/LcjWe" // Segundo enlace de descarga

    },
    {
        id: "Rayman Legends",
        imgSrc: "assets/img/raymanlegends.jpg",
        altText: "Rayman Legends",
        title: "Rayman Legends (USA).wua",
        downloadLink2: "https://cuty.io/arK86bfKza" // Segundo enlace de descarga

    },
    {
        id: "SONIC LOST WORLD",
        imgSrc: "assets/img/soniclostworld.jpg",
        altText: "SONIC LOST WORLD",
        title: "SONIC LOST WORLD (USA) (DLC) (v48).wua",
        downloadLink2: "https://cuty.io/BLS2u3alb" // Segundo enlace de descarga

    },
    {
        id: "Splatoon",
        imgSrc: "assets/splatoon.jpg",
        altText: "Splatoon",
        title: "Splatoon (USA) (v288).wua",
        downloadLink2: "https://cuty.io/05pmOE" // Segundo enlace de descarga

    },
    {
        id: "SpongeBob SquarePants Plankton's Robotic Revenge",
        imgSrc: "assets/img/SBRR.jpg",
        altText: "SpongeBob SquarePants: Plankton's Robotic Revenge",
        title: "SB Robotic Revenge (EU).wua",
        downloadLink2: "https://cuty.io/0oo4l7O0wHni" // Segundo enlace de descarga

    },
    {
        id: "Star Fox Zero",
        imgSrc: "assets/img/starfoxzero.jpg",
        altText: "Star Fox Zero",
        title: "Star Fox Zero (USA) (v16).wua",
        downloadLink2: "https://cuty.io/09L9RQXrS" // Segundo enlace de descarga

    },
    {
        id: "SUPER MARIO 3D WORLD",
        imgSrc: "assets/img/sm3dworld.jpg",
        altText: "SUPER MARIO 3D WORLD",
        title: "SUPER MARIO 3D WORLD (US).wua",
        downloadLink2: "https://cuty.io/uqHWz" // Segundo enlace de descarga

    },
    {
        id: "Super Mario Maker",
        imgSrc: "assets/img/supermariomaker.jpg",
        altText: "Super Mario Maker",
        title: "Super Mario Maker (US) (v272).wua",
        downloadLink2: "https://cuty.io/RdXfv6" // Segundo enlace de descarga

    },
    {
        id: "Super Smash Bros. for Wii U",
        imgSrc: "assets/img/superbros.jpg",
        altText: "Super Smash Bros. for Wii U",
        title: "Super Smash Bros. for Wii U (USA) (DLC) (v304).wua",
        downloadLink2: "https://cuty.io/lZM3" // Segundo enlace de descarga

    },
    {
        id: "TEKKEN TAG 2 Wii U EDITION",
        imgSrc: "assets/img/tekkentag2.jpg",
        altText: "TEKKEN TAG 2 Wii U EDITION",
        title: "TEKKEN TAG 2 Wii U EDITION (US) (v32).wua",
        downloadLink2: "https://cuty.io/km7Ae" // Segundo enlace de descarga

    },
    {
        id: "The Amazing Spider-Man 2",
        imgSrc: "assets/img/Spiderman2.jpg",
        altText: "The Amazing Spider-Man 2",
        title: "The Amazing Spider-Man 2 (USA).wua",
        downloadLink2: "https://cuty.io/HbD7LN2v" // Segundo enlace de descarga

    },
    {
        id: "The Binding of Isaac Rebirth",
        imgSrc: "assets/img/theboisaac.jpg",
        altText: "The Binding of Isaac Rebirth",
        title: "The Binding of Isaac Rebirth (US).wua",
        downloadLink2: "https://cuty.io/eI4A" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Breath of the Wild",
        imgSrc: "assets/img/thezeldabreathwild.jpg",
        altText: "The Legend of Zelda Breath of the Wild",
        title: "The Legend of Zelda - Breath of the Wild (US) (v208).wua",
        downloadLink2: "https://cuty.io/s2ZLevyuv29e" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Hyrule Historia",
        imgSrc: "assets/img/thehyrulehistoria.jpg",
        altText: "The Legend of Zelda Hyrule Historia",
        title: "The Legend of Zelda - Hyrule Historia (USA).wua",
        downloadLink2: "https://cuty.io/JLmHwsAKD4" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda The Wind Waker HD",
        imgSrc: "assets/img/thewindwaker.jpg",
        altText: "The Legend of Zelda The Wind Waker HD",
        title: "The Legend of Zelda - The Wind Waker HD (USA).wua",
        downloadLink2: "https://cuty.io/TsdyH69T47z3" // Segundo enlace de descarga

    },
    {
        id: "The Legend of Zelda Twilight Princess HD",
        imgSrc: "assets/img/Thezeldatwi.jpg",
        altText: "The Legend of Zelda Twilight Princess HD",
        title: "The Legend of Zelda - Twilight Princess HD (USA) (v81).wua",
        downloadLink2: "https://cuty.io/PZykqs" // Segundo enlace de descarga

    },
    {
        id: "Turbo Super Stunt Squad",
        imgSrc: "assets/img/turbo.jpg",
        altText: "Turbo Super Stunt Squad",
        title: "Turbo Super Stunt Squad (USA).wua",
        downloadLink2: "https://cuty.io/BwnMAPGM4tUF" // Segundo enlace de descarga

    },
    {
        id: "Wipeout 3",
        imgSrc: "assets/img/wipeout3.jpg",
        altText: "Wipeout 3",
        title: "Wipeout 3 (USA).wua",
        downloadLink2: "https://cuty.io/HyvbCaczfDbS" // Segundo enlace de descarga

    },
    {
        id: "Yoshi's Woolly World",
        imgSrc: "assets/img/yoshi.jpg",
        altText: "Yoshi's Woolly World",
        title: "Yoshi's Woolly World (USA) (v32).wua",
        downloadLink2: "https://cuty.io/iHUFoZEf" // Segundo enlace de descarga

    },
    {
        id: "ZombiU",
        imgSrc: "assets/img/zombiu.jpg",
        altText: "ZombiU",
        title: "ZombiU (USA) (v32).wua",
        downloadLink2: "https://cuty.io/kKSR088P" // Segundo enlace de descarga
    }
];

// Agregar todos los juegos al DOM
juegos.forEach(juego => {
    addGameToGallery(juego);
});
