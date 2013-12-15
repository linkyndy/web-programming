window.onload = function () {
    body = document.getElementsByTagName("body")[0];
    form = document.getElementsByTagName("form")[0];

    form.bg.onchange = function () {
        body.style.backgroundColor = this.value;
    }

    form.text.onchange = function () {
        body.style.color = this.value;
    }

    form.link.onchange = function () {
        links = document.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].style.color = this.value;
        }
    }
}
