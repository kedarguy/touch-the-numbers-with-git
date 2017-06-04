'use strict'

var gNextNum;
var gTimePassed;
var gSecsInterval;
var gIlans = [];
var gElBoard = document.querySelector('.gameBoard');
getIlans();
renderBoard();

function getIlans () {
    for (var i=1; i<10; i++) {
        gIlans.push('<img src="img/'+i+'.jpg" alt="'+i+'" height="150" width="150" onclick="cellClicked(this)">');
    }
}

function renderBoard() {
    var randMat = getRandomNumsMatrix(3,3);
    var strHtml = '';
    for(var i=0; i<3; i++) {
        strHtml += '<tr>';
        for (var j=0; j<3 ; j++) {
            strHtml += '<td>';
            strHtml += gIlans[randMat[i][j]];
            strHtml += '</td>';
        }
        strHtml += '</tr>';
    }
    gElBoard.innerHTML = strHtml;
}

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
    renderBoard();
}


function cellClicked(elNum) {
    
    if (!gSecsInterval) {
        gSecsInterval = setInterval(function () {
            gTimePassed++;
            // console.log('Second passed!', gSecsPassed);
            updateTime();
            
        }, 100)        
    }
    
    var clickedNum = +elNum.alt;
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

