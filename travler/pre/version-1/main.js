can you adjust this for mobile devices as well and tablets /* Reset and Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Rubik', sans-serif;
    background: #f8f8f8;
    color: #333;
    line-height: 1.6;
    scroll-behavior: smooth;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Styles */
header {
    background-color: #003366;
    color: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    display: flex;
    align-items: center;
}

header .logo img {
    height: 50px;
    margin-right: 10px;
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

nav.topnav {
    margin-top: 10px;
}

nav.topnav a {
    padding: 10px 16px;
    text-decoration: none;
    color: #fff;
    transition: background-color 0.3s, color 0.3s;
}

nav.topnav a:hover {
    background-color: #00509e;
    color: #fff;
}

/* Main Styles */
main {
    padding: 40px 0;
}

.content {
    background-color: #fff;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
}

.content:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

section h2 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #003366;
}

section p {
    font-size: 1.1em;
    line-height: 1.8;
}

/* Footer Styles */
footer {
    background-color: #003366;
    color: #fff;
    padding: 20px 0;
    text-align: center;
    position: relative;
    margin-top: 60px;
}

footer p {
    font-size: 0.9em;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    overflow: auto;
}

.modal-content {
    margin: auto;
    display: block;
    max-width: 80%;
    max-height: 80%;
}

.close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    cursor: pointer;
}

.close:hover {
    color: #ccc;
}

/* Responsive Styles */
@media (max-width: 768px) {
    header {
        padding: 15px 0;
    }

    header .logo img {
        height: 40px;
    }

    header h1 {
        font-size: 2em;
    }

    nav.topnav a {
        padding: 10px 12px;
    }

    .content {
        padding: 20px;
    }

    section h2 {
        font-size: 2em;
    }

    footer {
        padding: 15px 0;
    }

    footer p {
        font-size: 0.8em;
    }
}

@media (max-width: 480px) {
    header h1 {
        font-size: 1.8em;
    }

    nav.topnav a {
        padding: 8px 10px;
    }

    .content {
        padding: 15px;
    }

    section h2 {
        font-size: 1.8em;
    }

    footer p {
        font-size: 0.7em;
    }
}
