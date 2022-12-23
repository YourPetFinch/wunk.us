function wunkus() {
    document.getElementById('music').play();
    document.getElementById('button').style='display: none;'
    document.getElementById('button').onclick=''
    document.getElementById('main').style='background-image: url(images/wunkus-dingus-maxwell.gif); background-repeat: no-repeat; background-attachment: fixed; background-size: cover;'
    document.getElementById('main').onclick='wunkusClick()'
}

function wunkusClick() {
    console.log('you have clicked the wunk :)')
}