// document.addEventListener('DOMContentLoaded', () => {

// Unix timestamp (in seconds) to count down to

// var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;
var twoDaysFromNow = (new Date('2021.06.10').getTime() / 1000) + (64800)
// Set up FlipDown
var flipdown = new FlipDown(twoDaysFromNow, {
    theme: 'light' // or dark
})

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
        console.log('The countdown has ended!');
    });

// });