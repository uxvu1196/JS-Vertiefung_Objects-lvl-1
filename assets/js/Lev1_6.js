/*********************************************************************************
JS Vertiefung CodeFlow Übung lev1_6: Objects Arrays Accessing - Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte zugreift.
    * Verwende den Code aus dem Kommentarbereich.
    * Füge zu dem Objekt Deine Lieblingsmusik hinzu.
    * Greife mit console.log auf die Werte dieses Objekts zu:
        o "The Beatles"
        o Von Pink Floyd: "Download"
        o Von Pink Floyd: true
        o 1971 und 1983
        o Von Metallica: "MC"
        o Von Metallica das Wort: Ride
        o Von Led Zeppelin das Wort: IV:
        o Von Pink Floyd das Wort: Floyd
*/
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "AC/DC",
        title: "Hells Bells",
        release_year: 1980,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(`${myMusic[2].release_year} und ${myMusic[3].release_year}`);
console.log(myMusic[3].medium[2]);

// let myText = myMusic[3].title.split(" ");
// console.log(myText[4]);
console.log(myMusic[3].title.split(" ")[4])
// let text = "Hallo+Welt+Wie+geht+es";
// console.log(text.split('+'));
// console.log(myMusic[3].title.split());
// console.log(myMusic[3].title.split(""));
console.log(myMusic[2].title.split(" ")[2]);

console.log(myMusic[1].artist.split(" ")[1]);

// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
myMusic.push(
    {
        artist: "Iron Maiden",
        title: "The Number of the Beast",
        release_year: 1982,
        medium: ["LP", "CD", "Download"],
        gold: false
    }
);
console.log(myMusic);