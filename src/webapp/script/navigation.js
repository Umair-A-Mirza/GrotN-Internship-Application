const navbar = `
<nav class="navbar">
    <ul>
        <li>
            <img id="logo" src="/src/assets/logo_grotn.png" alt="logo">
        </li>
        <li><a href="index.html">Home</a></li>
        <li>
            <a href="index.html">Resources</a>
            <svg id="drop" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 8px;">
                <path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </li>
        <li><a href="index.html">Manual</a></li>
        <li><a href="index.html">Pricing</a></li>
        <li><a href="index.html">About Us</a></li>
    </ul>
    <div id="navbar_text">GrotN</div>
    <button id="login_button">Log In</button>
</nav>
`;

/**
 * Adding navbar to the body of the document.
 */
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", navbar); // Ensuring that navbar is the first element.
});
