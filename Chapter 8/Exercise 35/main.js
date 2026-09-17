// Changing the image

function changeImage() {
    const url = prompt("Please enter your image URL:");

    image.style.border = "3px solid black";

    image.style.borderColor = prompt("Please enter your desired border color:");

    const width = image.style.width = prompt("Please enter the width of the image (in pixels):");

    const height = image.style.height = prompt("Please enter the height of the image (in pixels):");

    image.style.borderRadius = prompt("Please enter the border radius (in pixels):") + "px";

  

    image.setAttribute('src', url);

    image.setAttribute('width', width);

     image.setAttribute('height', height);
 
}