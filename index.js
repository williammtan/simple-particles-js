// use the particleJS library
// load the settings defined in the particles.json file
// the function particlesJS.load() will do everything for us, given the settings we applied to it
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// use the howler.js library
var song = new Howl({
    src: ['song.mp3'],
    volume: 0.25
});
  
song.play();