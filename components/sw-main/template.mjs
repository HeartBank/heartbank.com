const template = document.createElement("template");

// Reference: https://codepen.io/team/css-tricks/pen/GRggVBg

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-main/shadow.css">
    <slot></slot>
    <img src="components/sw-main/background.svg">
`;

export default template;