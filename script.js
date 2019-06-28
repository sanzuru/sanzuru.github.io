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

var request = new XMLHttpRequest();
request.open('GET', 'https://api.cryptonator.com/api/ticker/link-usd');
request.responseType = 'json';
request.onload = function(){
    var data = request.response;
    console.log(data.ticker.price);
    document.getElementById('ticker').innerHTML = "Price: " + data.ticker.price;
}

request.send();