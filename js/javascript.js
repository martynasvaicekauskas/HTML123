/**
 * Created by Martynas on 2017-05-11.
 */
var x = true;
var y = true;
function toggle() {

    if (x) {

        document.getElementById('myImage').src="img/pic_bulbon.gif";
        x=!x;
    } else {
        document.getElementById('myImage').src="img/pic_bulboff.gif";
        x=!x;
    }

}

function toggleShow() {
    if (y) {
        document.getElementById('myImage').style.display = 'block';
        y=!y;
    } else {
        document.getElementById('myImage').style.display='none';
        y=!y;
    }
}