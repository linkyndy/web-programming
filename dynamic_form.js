window.onload = function () {
    body = document.getElementsByTagName("body")[0];
    form = document.getElementsByTagName("form")[0];

    form.bg.onchange = function () {
        body.bgColor = this.value;
    }

    form.text.onchange = function () {
        body.text = this.value;
    }

    form.link.onchange = function () {
        body.link = this.value;
    }

    form.alink.onchange = function () {
        body.aLink = this.value;
    }

    form.vlink.onchange = function () {
        body.vLink = this.value;
    }
}
