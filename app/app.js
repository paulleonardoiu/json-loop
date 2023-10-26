var GAMES = [
    {
        gameTitle: "Halo",
        gameThumbImg: "thumb1_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Halo is a military science fiction media franchise, originally created and developed by Bungie and currently managed and developed by 343 Industries, part of Microsoft's Xbox Game Studios.",
        gameDescription: "",
        gameRating: "M"
    },
    {
        gameTitle: "Apex Legends",
        gameThumbImg: "thumb2_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.",
        gameDescription: "",
        gameRating: "T"
    },
    {
        gameTitle: "Call of Duty: Black Ops III",
        gameThumbImg: "thumb3_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Call of Duty: Black Ops III is a 2015 first-person shooter game developed by Treyarch and published by Activision.",
        gameDescription: "",
        gameRating: "M"
    },
    {
        gameTitle: "Valorant",
        gameThumbImg: "thumb4_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows.",
        gameDescription: "",
        gameRating: "T"
    },
    {
        gameTitle: "Overwatch",
        gameThumbImg: "thumb5_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Overwatch is a multimedia franchise centered on a series of online multiplayer first-person shooter video games developed by Blizzard Entertainment.",
        gameDescription: "",
        gameRating: "T"
    },
    {
        gameTitle: "Aimlabs",
        gameThumbImg: "thumb6_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Aimlabs is a training platform designed by gamers to help sharpen up your core FPS aiming skills.",
        gameDescription: "",
        gameRating: "E"
    },
    {
        gameTitle: "Super Monkey Ball",
        gameThumbImg: "thumb11_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Super Monkey Ball is a series of arcade platform video games initially developed by Amusement Vision and published by Sega.",
        gameDescription: "",
        gameRating: "E"
    },
    {
        gameTitle: "Minecraft",
        gameThumbImg: "thumb8_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Minecraft is a sandbox game developed by Mojang Studios and originally released in 2009.",
        gameDescription: "",
        gameRating: "E"
    },
    {
        gameTitle: "Roblox",
        gameThumbImg: "thumb9_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Roblox is an online game platform and game creation system developed by Roblox Corporation that allows users to program games and play games created by other users.",
        gameDescription: "",
        gameRating: "E"
    },
    {
        gameTitle: "Animal Crossing",
        gameThumbImg: "thumb12_300x300.jpg",
        gameFullImg: "",
        gameBriefDescription: "Animal Crossing is a social simulation video game series developed and published by Nintendo.",
        gameDescription: "",
        gameRating: "E"
    }
];

function initListeners(){}
{/* <img src="images/icons/thumbs-assets/${game.gameThumbImg}" alt="${game.gameTitle}"> */}

function loadData(){
    $.each(GAMES, function(idx, game){
        $("#app").append(`<div class="game">
        <img src="images/icons/thumbs-assets/${game.gameThumbImg}" alt="${game.gameTitle}">
        <div class="text">
            <p class="title">${game.gameTitle}</p>
            <hr>
            <p class="desc">${game.gameBriefDescription}</p>
            <p class="rating">Rated ${game.gameRating}</p>
        </div>
    </div>`);
    });
}

$(document).ready(function(){
    // initListeners();
    loadData();
})