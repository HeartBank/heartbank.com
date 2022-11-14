const template = document.createElement("template");

// Reference: https://codepen.io/team/css-tricks/pen/GRggVBg

template.innerHTML = `
    <link rel="stylesheet" href="components/hb-main/shadow.css">
    <slot></slot>
    <img src="components/hb-main/background.svg">
`;

export default template;