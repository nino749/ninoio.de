//clipboard
function copyToClipboard() {
    const textToCopy = "datei.nino";
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert('datei.nino copied!');
    }, function(err) {
        console.error('datei.nino didnt copied, please try again.', err);
    });
}
//button switch
document.addEventListener('DOMContentLoaded', function () {
    const backgrounds = [
        'url("forest.png")',
        'url("background2.png")',
        'url("background.png")'
    ];
    
    let currentBackgroundIndex = 0;
    const body = document.body;
    const switchButton = document.getElementById('switchbtn');

    switchButton.addEventListener('click', function () {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        body.style.backgroundImage = backgrounds[currentBackgroundIndex];
    });

    // Initial background
    body.style.backgroundImage = backgrounds[currentBackgroundIndex];
});
//change Icon
document.addEventListener('DOMContentLoaded', function( ) {
    const icons = [
        'fa-solid fa-sun fa-spin',
        'fa-regular fa-moon fa-shake'
    ];
    
    let currentIconIndex = 0;
    const iconElement = document.getElementById('sun');
    const changeIconButton = document.getElementById('switchbtn');

    changeIconButton.addEventListener('click', function () {
        if(currentIconIndex == (icons.length - 1)){
          currentIconIndex = 0;
        }else{
          currentIconIndex = currentIconIndex + 1;
        }
        iconElement.className = icons[currentIconIndex];
    });
});