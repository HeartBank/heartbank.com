import "./hb-sponsors/element.mjs";
import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-footer/shadow.css">
    <link rel="stylesheet" href="components/hb-footer/shadow.css">
    <nav>
        <main>
            <section>
                <hb-sponsors></hb-sponsors>
            </section>
            <section>
                <div>
                    <h5>Thank</h5>
                    <ul>
                        <li><a href="https://kiitos.earth">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/heartbank">GitHub</a></li>
                    </ul> 
                </div>
            </section>
            <section>
                <div>
                    <h5>Connect</h5>
                    <ul>
                        <li><a href="https://talk.siliconwat.org">Silicon Wat</a></li>
                        <li><a href="https://youtube.com/c/HeartBank">YouTube</a></li>
                        <li><a href="https://twitter.com/heartbank">Twitter</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Contact</h5>
                    <ul>
                        <li><a href="mailto:thank@heartbank.com">thank@heartbank.com</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <footer>
            <small><a href="https://heartbank.org">HeartBank® Foundation</a> &copy; 2023</small>
        </footer>
    </nav>
`;

export default template;