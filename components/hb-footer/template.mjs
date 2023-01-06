import "./hb-sponsors/element.mjs";
import { THONLY } from "https://thonly.org/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${THONLY}/components/tl-footer/shadow.css">
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
                        <li><a href="https://dear.kiitos.earth/#HeartBank">Kiitos</a></li>
                    </ul> 
                </div>
                <div>
                    <h5>Sponsor</h5>
                    <ul>
                        <li><a href="https://heartbank.fund/#HeartBank">HeartBank</a></li>
                        <li><a href="https://github.com/sponsors/heartbank">GitHub</a></li>
                    </ul> 
                </div>
            </section>
            <section>
                <div>
                    <h5>Follow</h5>
                    <ul>
                        <li><a href="https://me.thonly.net/#HeartBank">THonly</a></li>
                        <li><a href="https://twitter.com/heartbank">Twitter</a></li>
                        <li><a href="https://youtube.com/@HeartBank">YouTube</a></li>
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