var detected = false;
var supported = false;

var detect = function() {
    var canvas = document.createElement('canvas');

    if(!canvas.toDataURL)
        return false;
    canvas.width = 1;
    canvas.height = 1;
    try {
        var url = canvas.toDataURL('image/webp');
        return url.substring(5, 15) === 'image/webp';
    } catch (e) {
        return false;
    }
};

module.exports = function() {
    if(!detected) {
        detected = true;
        supported = detect();
    }
    return supported;
};