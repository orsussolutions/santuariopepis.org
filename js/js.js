

function menuClick()
{

  var nav = document.getElementsByTagName('nav')[0];
        if (nav.style.display == 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
}
  



function showPic(imageSrc,alt){

    // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption

var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("modalCaption");

  modal.style.display = "block";
  modalImg.src = "./img/santuary/" + imageSrc;
  captionText.innerHTML = alt;


  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

}



