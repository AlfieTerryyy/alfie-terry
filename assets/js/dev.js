document.addEventListener("DOMContentLoaded", function () {
    const maintenanceMessage = `
        <div class="maintenance-overlay" role="alert" aria-live="assertive">
            <div class="maintenance-container">
                <img src="https://alfieterry.co.uk/assets/images/logo.png" alt="alfieterry.co.uk Logo" class="logo">
                <h1>alfieterry.co.uk is temporarily down for maintenance</h1>
                <p>Come back soon!</p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', maintenanceMessage);

    const style = document.createElement('style');
    style.innerHTML = `
        :root {
            --primary: #2563eb;
            --primary-light: #60a5fa;
            --dark: #0f172a;
            --dark-lighter: #1e293b;
            --text: #f1f5f9;
            --border-radius: 12px;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: var(--dark);
            font-family: 'Roboto', Arial, sans-serif;
            color: var(--text);
            text-align: center;
            overflow: hidden;
            margin: 0;
        }

        .maintenance-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            color: var(--text);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            text-align: center;
            flex-direction: column;
            animation: fadeIn 1s ease-in-out;
            will-change: opacity;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .maintenance-container {
            background-color: var(--dark-lighter);
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            animation: fadeIn 0.5s ease-in-out, slideUp 0.5s ease-in-out;
            max-width: 90%;
            width: 500px;
            will-change: transform, opacity;
        }

        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .logo {
            max-width: 120px;
            margin-bottom: 20px;
            animation: grow 1s ease-in-out;
            will-change: transform, opacity;
        }

        @keyframes grow {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
        }

        /* Additional styling */
        a {
            color: var(--primary);
            text-decoration: none;
            font-weight: bold;
        }

        a:hover {
            color: var(--primary-light);
            text-decoration: underline;
        }

        button {
            background-color: var(--primary);
            color: var(--text);
            border: none;
            padding: 10px 20px;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: var(--primary-light);
        }

        .contact-info {
            margin-top: 20px;
            font-size: 0.9rem;
            color: var(--primary-light);
        }
    `;
    document.head.appendChild(style);
});
