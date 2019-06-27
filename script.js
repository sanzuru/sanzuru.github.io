function loadSites() {
    //var links = JSON.parse(links);
    for (var i = 0; i < Object.keys(links).length+1; i++) {
        for (var column in links[i]) {
            var clmn = document.getElementById("column"+String(i));
            var newEle = '';
            for (var j = 0; j < links[i].length; j++) {
                if (j === 0) {
                    newEle += '<li><h3>' + links[i][j].category + '</h3></li>';
                    //console.log(links[i][j].category);
                }
                else {
                    newEle += '<li><a href="' + links[i][j].url + '">' + links[i][j].title + '</a></li>';
                    //console.log(links[i][j].title, links[i][j].url);
                }
            }
            clmn.innerHTML = newEle;
        }
    }
}

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// initialize search autocompletion...
$("#search").googleSuggest({secure: true});

var request = new XMLHttpRequest();
request.open('GET', 'https://api.coinmarketcap.com/v1/ticker/quant/');
request.responseType = 'json';
request.onload = function(){
    var data = request.response;
    console.log(data[0]);
}

request.send();