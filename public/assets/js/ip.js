$(document).ready(function(){
  $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
      var split = data.split("\n");
      var ip = split[2].substring(3);
      var loc = split[8].substring(4)
      var flag = loc.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397) );
      document.getElementById("ip").innerHTML += "🦜 Ahoy, matey! Your ship 🚢 is sailing from : <a href='https://ipinfo.io/' target='_blank' style='text-decoration: none;'>" + flag + " " + loc + ",  " + ip + "</a>";
  })
});
