// Arrays for artists by genre
//https://www.aaemusic.com/browse-artists-by-genre/

var alternative = ['Arctic Monkeys', 'Linkin Park', 'Paramore', 'Death Cab For Cutie', 'The Strokes', 'The Kooks' ]

var country = ['Carrie Underwood', 'Brian Maruis', 'Lady A', 'Rascal Flatts', 'Willie Nelson', 'Brad Paisley']

var electronic = ['Moby', 'Boards of Canada', 'Calvin Harris', 'Daft Punk', 'Justice' ]

var folk = ['Jack Johnson', 'Mumford & Sons', 'Iron & Wine', 'Neil Yound']

var hip = ['Eminem', 'Rihanna', 'Bonobo', 'Kid Cudi', 'Tyler, The Creater', 'M.I.A']

var pop = ['Britney Spears', 'Avril Lavigne', 'MGMT', 'Phoenix', 'BTS']

var punk = ['Rise Against', 'A Day To Remember', 'Pierce The Veil', 'All Time Low', 'State Champs', 'Dropkick Murphys']

var rock = ['The Muse', 'Foo Fighters', 'The Killers', 'Kings of Leon', 'PVRIS']


function getRec() {
    var list = '<ul>'
    var ele = document.getElementsByName('genre');
    for(i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
          button = ele[i].value
  
          if (button === "Alternative") {
              alternative.forEach(function(alternative) {
                
                list += '<li>' + alternative + '</li>';
                list += '<br />';
              });
              list += '</ul>';
              document.getElementById('header').innerHTML = "Alternative Artist Suggestions"
              document.getElementById('artists').innerHTML = list;

          }

          if (button === "Country") {
            country.forEach(function(country) {
              list += '<li>' + country + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Country Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Electronic") {
            electronic.forEach(function(electronic) {
              list += '<li>' + electronic + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Electronic Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Folk") {
            folk.forEach(function(folk) {
              list += '<li>' + folk + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Folk Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Hip Hop") {
            hip.forEach(function(hip) {
              list += '<li>' + hip + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Hip Hop Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Pop") {
            pop.forEach(function(pop) {
              list += '<li>' + pop + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Pop Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Punk") {
            punk.forEach(function(punk) {
              list += '<li>' + punk + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Punk Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

          if (button === "Rock") {
            rock.forEach(function(rock) {
              list += '<li>' + rock + '</li>';
              list += '<br />';
            });
            list += '</ul>';
            document.getElementById('header').innerHTML = "Rock Artist Suggestions"
            document.getElementById('artists').innerHTML = list;
          }

    }
  }
}
