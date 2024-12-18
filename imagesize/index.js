
let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessage=document.getElementById('warningMessage')
imageMaxWidth=230
imageMinWidth=190
originalImageWidth=200

function onDecrement() {
  let updateSize=parseInt(imageWidthElement.textContent)-5
  if(updateSize>imageMinWidth) {
    imageWidthElement.textContent=updateSize
    imageElement.style.width=updateSize+'px'
    warningMessage.textContent=""
  }
  else {
    warningMessage.textContent="you are two high"
  }

}

function onIncrement() {
  let updateSize=parseInt(imageWidthElement.textContent)+5
  if(updateSize<=imageMaxWidth) {
    imageWidthElement.textContent=updateSize
    imageElement.style.width=updateSize+'px'
    warningMessage.textContent=""
  }
  else {
    warningMessage.textContent="you are two high"
  }

}
































