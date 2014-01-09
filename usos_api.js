function courses() {
    lang = document.getElementById("lang").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apps.usos.edu.pl/services/courses/search?lang=" + lang, false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.items.length; i++) {
            response += json.items[i].course_id + " " + json.items[i].match + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function courses_by_name() {
    name = document.getElementById("name").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apps.usos.edu.pl/services/courses/search?name=" + name + "&lang=en", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.items.length; i++) {
            response += json.items[i].course_id + " " + json.items[i].match + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function course() {
    course_id = document.getElementById("course_id").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apps.usos.edu.pl/services/courses/course?course_id=" + course_id + "&fields=name|profile_url", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = json.name.en + " " + json.profile_url;

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function faculties() {
    query = document.getElementById("query").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apps.usos.edu.pl/services/fac/search?query=" + query + "&lang=en", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.items.length; i++) {
            response += json.items[i].id + " " + json.items[i].match + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function subfaculties() {
    faculty_id = document.getElementById("faculty_id").value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://apps.usos.edu.pl/services/fac/subfaculties_deep?fac_id=" + faculty_id, false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i] + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}
