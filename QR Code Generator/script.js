let imgSec = document.getElementById("image-section");
let qrImg = document.getElementById("qr-code");
let qrTxt = document.getElementById("qr-text");

function generateQR() {
  if (qrTxt.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrTxt.value;
    imgSec.classList.add("display-image");
  } else {
    qrTxt.classList.add("error");
    setTimeout(() => {
      qrTxt.classList.remove("error");
    }, 200);
  }
}
