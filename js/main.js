'use strict'

var gNextNum;
var gTimePassed;
var gSecsInterval;

function cleanBoard() {
    var tds = document.querySelectorAll('td.clicked');
    for (var i=0; i<tds.length; i++) {
        tds[i].classList.remove('clicked');
    }
}

function updateNextNum() {
    var elSpanNextNum = document.querySelector('#spanNextNum');
            console.log('elSpanNextNum', elSpanNextNum);
            
    elSpanNextNum.innerText = gNextNum;
}
function updateTime() {
    var elSpanTimer = document.getElementById('spanTimer');
            
    elSpanTimer.innerText = gTimePassed / 10;
}

function restartGame() {
    if (gSecsInterval) clearInterval(gSecsInterval);
    gNextNum    = 1;
    gTimePassed  = 0;
    gSecsInterval = undefined;
    cleanBoard();
    updateNextNum();
    updateTime();
}


function cellClicked(elNum) {
    
    if (!gSecsInterval) {
        gSecsInterval = setInterval(function () {
            gTimePassed++;
            // console.log('Second passed!', gSecsPassed);
            updateTime();
            
        }, 100)        
    }
    
   
    var clickedNum = +elNum.innerText;
    if (gNextNum === clickedNum) {
        elNum.classList.add('clicked');
        
        if (gNextNum === 9) {
        //    console.log('Victory! took you: ', gSecsPassed, ' seconds');
           alert('Victory! time: ' + gTimePassed/10)
           clearInterval(gSecsInterval);
            
        } else {
            gNextNum++;
            updateNextNum();
        }

    }
    
}

