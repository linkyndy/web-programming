function capitalize() {
    // Get <textarea>
    textarea = document.getElementsByTagName("textarea")[0];

    // Get <textarea> contents
    content = new String(textarea.value);

    // Get word Array from contents
    words = content.split(" ");

    // Build new Array
    new_words = Array();
    for (index in words) {
        // Capitalize each word
        new_words.push(words[index].charAt(0).toUpperCase() + words[index].slice(1));
    }

    // Build new content
    new_content = new_words.join(" ");

    // Assign content to <textarea>
    textarea.value = new_content;
}
