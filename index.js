// use the particleJS library
// load the settings defined in the particles.json file
// the function particlesJS.load() will do everything for us, given the settings we applied to it
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});


function play() {
    // use the howler.js library to play the mp3 file song.mp3
    var song = new Howl({ // define Howl class
        src: ['song.mp3'], // passing in the file path to song.mp3
        volume: 0.25
    });
      
    song.play(); // play the song
}