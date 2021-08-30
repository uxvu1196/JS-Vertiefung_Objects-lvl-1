/*  
_ANLEITUNG_

Für die forEach()-Methode schreib erst mal die function mit Befehlen aus (siehe blaue Funktion). Diese werden dann ausgeführt wenn du es beim forEach()  (siehe Zeile 21) erwähnst. Es geht einmal bspw. durch die object-Liste "studentData".

Syntax siehe Zeile 13:

STEP 1_______________________________________
function "x-beliebiger Name"(){
console.log("x-beliebiger-Name" . worauf es zufreifen sollte)
console.log("x-beliebiger-Name" . worauf es zufreifen sollte)
console.log("x-beliebiger-Name" . worauf es zufreifen sollte)
};
______________________________________________

// Für die forEach()-Methode unbedingt noch ein callback-funktion in Form einer Arrow-funktion schreiben 
DIESES ZEICHEN "=>" = Callback sagt dem Compiler Übersetzungsprogramm „Jetzt kommen Befehle die du ausführen musst“

STEP 2_________________________________________
"Funktionsname des Array oder Object erwähnen".forEach("x-beliebiger-Name" =>{
    "Funktionsname aus Step 1 erwähnen"(Funktionsname von Step2 erwähnen)
})
_______________________________________________
*/

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

//student sprich die einzelnen Elemente an in der ersten "Schublade"
function showData(student) {
    console.log(student.name);
    console.log(student.coop);
    console.log(student.address.city);
    console.log(student.emails);
}

// for each immer mit arrow function = callback function
//studentx spricht die Elemente in der zweiten Schublade
studentData.forEach(studentx => {
    showData(studentx);
})