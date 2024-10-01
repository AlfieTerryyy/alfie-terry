document.addEventListener("DOMContentLoaded", function() {
    var htmlEditor = CodeMirror.fromTextArea(document.getElementById("html-code"), { mode: "htmlmixed", lineNumbers: true });
    var cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), { mode: "css", lineNumbers: true });
    var jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), { mode: "javascript", lineNumbers: true });

    document.getElementById("run-button").addEventListener("click", function() {
        var htmlContent = htmlEditor.getValue();
        var cssContent = "<style>" + cssEditor.getValue() + "</style>";
        var jsContent = "<script>" + jsEditor.getValue() + "<\/script>";
        var output = document.getElementById("output");
        output.srcdoc = htmlContent + cssContent + jsContent;
        document.getElementById("fullscreen").style.display = "block";
    });

    document.getElementById("fullscreen-close").addEventListener("click", function() {
        document.getElementById("fullscreen").style.display = "none";
    });
});
