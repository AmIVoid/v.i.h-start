/* ------------- CLOCK ------------- */ 

function updateClock() {
    var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();

/* ------------- SEARCH TOGGLE ------------- */ 

function toggleDiv(divid)
  {
 
    varon = divid + 'g';
    varoff = divid + 'd';
 
    if(document.getElementById(varon).style.display == 'block')
    {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
    }
   
    else
    {  
    document.getElementById(varoff).style.display = 'none';
    document.getElementById(varon).style.display = 'block'
    }
} 

/* ------------- WAVIFY ------------- */ 

var myWave = $('#wave1').wavify({
  height: 90,
  bones: 7,
  amplitude: 50,
  color: 'rgba(46,52,64,0.3)',
  speed: 0.1
});

var myWave = $('#wave2').wavify({
  height: 120,
  bones: 4,
  amplitude: 20,
  color: 'rgba(59,66,82,0.2)',
  speed: 0.16
});