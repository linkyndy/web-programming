function campuses() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/campuses?output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].id + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function calendars() {
    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/calendars?output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].id + " " + json[i].calname + " " + json[i].campus + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function calendars_for_campus() {
    campus = document.getElementById("calendars_for_campus").value;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/calendars?campus=" + campus + "&output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].id + " " + json[i].calname + " " + json[i].campus + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function events_for_campus() {
    campus = document.getElementById("events_for_campus").value;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/events?campus=" + campus + "&output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].summary + " " + json[i].dtstart + " " + json[i].dtend + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function events_for_campus_on_day() {
    campus = document.getElementById("events_for_campus_on_day_campus").value;
    day = document.getElementById("events_for_campus_on_day_day").value;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/events?campus=" + campus + "&dtstart=" + day + "&dtend=" + day + "&output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].summary + " " + json[i].dtstart + " " + json[i].dtend + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function events_filtered_by() {
    q = document.getElementById("events_filtered_by").value;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/events?q=" + q + "&output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].summary + " " + json[i].dtstart + " " + json[i].dtend + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}

function events_for_campus_filtered_by_tag() {
    campus = document.getElementById("events_for_campus_filtered_by_tag_campus").value;
    tag = document.getElementById("events_for_campus_filtered_by_tag_tag").value;

    xhr = new XMLHttpRequest();
    xhr.open("GET", "http://events.cs50.net/api/1.0/events?campus=" + campus + "&tag=" + tag + "&output=json", false);
    document.getElementById("response").innerHTML = "Loading...";
    xhr.send();

    if (xhr.status == 200) {
        json = JSON.parse(xhr.responseText);

        response = "";
        for (i = 0; i < json.length; i++) {
            response += json[i].summary + " " + json[i].dtstart + " " + json[i].dtend + "<br/>";
        }

        document.getElementById("response").innerHTML = response;
    } else {
        document.getElementById("response").innerHTML = xhr.status + " " + xhr.statusText;
    }
}
