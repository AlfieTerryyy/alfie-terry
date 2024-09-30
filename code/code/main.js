document.addEventListener('DOMContentLoaded', () => {
    const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
        lineNumbers: true,
        mode: 'htmlmixed',
        theme: 'default'
    });

    const cssEditor = CodeMirror.fromTextArea(document.getElementById('css-code'), {
        lineNumbers: true,
        mode: 'css',
        theme: 'default'
    });

    const jsEditor = CodeMirror.fromTextArea(document.getElementById('js-code'), {
        lineNumbers: true,
        mode: 'javascript',
        theme: 'default'
    });

    const runButton = document.getElementById('run-button');
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenClose = document.getElementById('fullscreen-close');
    const output = document.getElementById('output');
    const windowClose = document.querySelector('.title-bar .close');
    const windowElement = document.querySelector('.window');

    runButton.addEventListener('click', () => {
        const htmlCode = htmlEditor.getValue();
        const cssCode = `<style>${cssEditor.getValue()}</style>`;
        const jsCode = `<script>${jsEditor.getValue()}<\/script>`;
        const fullCode = `${htmlCode}${cssCode}${jsCode}`;
        const blob = new Blob([fullCode], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        output.src = url;
        fullscreen.classList.add('active');
    });

    fullscreenClose.addEventListener('click', () => {
        fullscreen.classList.remove('active');
    });

    windowClose.addEventListener('click', () => {
        windowElement.style.display = 'none';
    });

    htmlEditor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a live code editor.</p>
</body>
</html>`);

    cssEditor.setValue(`body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}`);

    jsEditor.setValue(`console.log('Hello, World!');`);
});
