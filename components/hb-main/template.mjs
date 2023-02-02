const template = document.createElement("template");

// Reference: https://codepen.io/team/css-tricks/pen/GRggVBg

template.innerHTML = `
    <link rel="stylesheet" href="components/hb-main/shadow.css">
    <header>
        <h1>Currently in stealth development...</h1>
        <br>
        <a><button></button></a>
    </header>
    <main>
        <tl-kiitos></tl-kiitos>
    </main>
    <footer>
        <!--<tl-robot></tl-robot>-->
    </footer>
    <img src="components/hb-main/background.svg">
`;

export default template;