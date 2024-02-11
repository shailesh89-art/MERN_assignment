//  films they are linked with Actors:Define Actor
const actors = {
    "Akshay Kumar": ["Housefull", "khiladi", "Rowdy Rathore"],
    "Salman khan": ["Dabbang", "Wanted", "Kick"],
    "Sharukh khan": ["Fan", "Bazigar", "Jawan"],
    "Ranbir Kapor": ["Animal", "Wake up Sid", "Rockstar"],
    "R madhavan": ["Rocketry", "3 iditos", "Dil Chata Hai"]
};

// Method to find actors by movie name
function findActorByMoviesName(movieName) {
    const actorsFound = [];
    for (const actor in actors) {
        if (actors.hasOwnProperty(actor)) {
            if (actors[actor].includes(movieName)) {
                actorsFound.push(actor);
            }
        }
    }
    if (actorsFound.length === 0) {
        console.log("Not Any actor found :", movieName);
    } else {
        console.log("actors found for movie", movieName + ":", actorsFound.join(", "));
    }
}

// Method to find movies by actor name
function findMoviesByActorName(actorName) {
    if (actors.hasOwnProperty(actorName)) {
        console.log("Movies found actors", actorName + ":", actors[actorName].join(", "));
    } else {
        console.log("Not any movies found for actor:", actorName);
    }
}

// Example usage
console.log("Searching for actors based on movie name:");
findActorByMoviesName("Animal");
findActorByMoviesName("Bahubail");  //this movie not found by any actor
findActorByMoviesName("Kick");

console.log("\nSearching for movies based on actor name:");
findMoviesByActorName("Sharukh khan");
findMoviesByActorName("Akshay kumar");
findMoviesByActorName("Salman khan"); // Test for an actor not in the database
