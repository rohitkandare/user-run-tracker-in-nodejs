const express = require('express')
const app = express()
var Distance = require('geo-distance');

const fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);

app.listen(3000, (err) => {
    console.log("server run");
})


const size = data.length

let i = 0
let j = 1
while (size > i && size > j) {

    function unixTime(unixtime) {

        var u = new Date(unixtime*1000);
    
          return (' ' + ('0' + u.getUTCHours()).slice(-2) +
            ':' + ('0' + u.getUTCMinutes()).slice(-2) +
            '.' + (u.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) ) 
            
        };   
       const time =  unixTime(data[j].ts)
       
      
    var d1 = {
        lat: data[i].lt,
        lon: data[i].lg,
    };

    var d2 = {
        lat: data[j].lt,
        lon: data[j].lg,
    };
    i++
    j++
  
      var d1Tod2 = Distance.between(d1, d2); 
      console.log('' + d1Tod2.human_readable(), time ,'', j)
      
}
