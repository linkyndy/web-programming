// Colors array - must be of tds length!
    var colors = ["#111", "#222", "#333", "#444", "#555", "#666", "#777", "#888", "#999"];

    window.onload = function () {
        var table = document.getElementsByTagName("table")[0];

        // Get table tds and convert them to array
        var tds = table.getElementsByTagName("td");
        tds = Array.prototype.slice.call(tds);

        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");

        img1.onmouseover = img2.onmouseover = function () {
            if (tds.length > 0) {
                // Get random td list index
                var rand = Math.floor(Math.random() * tds.length);

                // Create image copy
                img_copy = this.cloneNode();

                // Fill the random td with the image
                tds[rand].appendChild(img_copy);

                // Set background color for td
                tds[rand].style.backgroundColor = colors[rand];

                // Remove the random element from the td list and the color from array
                tds.splice(rand, 1);
                colors.splice(rand, 1);
            }
        }
    }
