function hexStringToRGB(hexString) {


    if(hexString.substring(0,1) == '#') {
        hexString = hexString.substring(1);
    }

    let rgbColor = {};


    rgbColor.r = parseInt(hexString.substring(0,2),16);
    rgbColor.g = parseInt(hexString.substring(2,4),16);
    rgbColor.b = parseInt(hexString.substring(4),16);

    return rgbColor;
}

console.log(hexStringToRGB("#FF9933"), {r:255, g:153, b:51});
