document.getElementById("rickrollButton").addEventListener("click", function() {
    for (var i = 0; i < 10; i++) {
        var iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        document.getElementById("rickrollContainer").appendChild(iframe);
    }

    document.getElementById('rickrollButton').innerText = "You've been rickrolled!";
});

var img_click = false
document.getElementById('image').addEventListener('click', function() {
    var image = document.getElementById('image');
    image.src = img_click ? 'https://via.placeholder.com/150' : 'https://via.placeholder.com/300';
    img_click = !img_click;
});