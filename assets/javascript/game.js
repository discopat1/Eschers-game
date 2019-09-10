function leftArrowPressed() {
    var element = document.getElementById("spaceship");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
    }

    function rightArrowPressed() {
    var element = document.getElementById("spaceship");
    element.style.left = parseInt(element.style.left) + 10 + 'px';

    }

    function upArrowPressed() {
        console.log("up arrow")
    var element = document.getElementById("spaceship");
    element.style.bottom = parseInt(element.style.bottom) + 10 + 'px';
    }

    function downArrowPressed() {
    var element = document.getElementById("spaceship");
    element.style.bottom = parseInt(element.style.bottom) - 10 + 'px';
    }

    function moveSelection(evt) {
        switch (evt.keyCode) {
            case 37:
            leftArrowPressed();
            break;
            case 39:
            rightArrowPressed();
            break;
            case 38:
            upArrowPressed();
            break;
            case 40:
            downArrowPressed();
            break;
            }
        };

function docReady()
{
  
  window.addEventListener('keydown', moveSelection);
}