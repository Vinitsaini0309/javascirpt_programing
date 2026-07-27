//  Immediately Inoked Function Expression  (IIFE)

(function connectivity(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// UnNamed IIFE 
( (name) => {
    console.log(`DB CONNECTED TWO , ${name}`);
}
)('sonali')
