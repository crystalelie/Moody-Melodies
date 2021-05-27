
function onDisplay() {
  var ele = document.getElementsByName('songs');
  var pdf = document.getElementById("download");

  for(i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        button = ele[i].value

        if (button === "Chill") {
          document.getElementById("playlist1").innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/7dhOZcsmBOLykXXOk2KxIv' width='600' height='440' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
          pdf.style.display = "block";
        }
        
        if (button === "Sad") {
          document.getElementById("playlist1").innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/3Gor1ZPFli0pDiBt8TVax5' width='600' height='440' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
          pdf.style.display = "block";

        }

        if (button === "Angry") {
          document.getElementById("playlist1").innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/5MRl7ftUnCoFKx2wRrHyRY' width='600' height='440' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
          pdf.style.display = "block";
        }

        if (button === "Happy") {
          document.getElementById("playlist1").innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/1Oju1Sv1fSuppdpfKCvEsi' width='600' height='440' frameborder='0' allowtransparency='true' allow='encrypted-media'></iframe>";
          pdf.style.display = "block";
        }
        }
      }
  }


