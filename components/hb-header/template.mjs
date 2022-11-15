import { ORIGIN } from "/global.mjs";
const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="${ORIGIN}/components/tl-header/shadow.css">
    <link rel="stylesheet" href="components/hb-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="heartbank.png"></a>
            <a href="/"><h1>HeartBank<sup>®</sup></h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <ul>
            <li>
                <h3>Club</h3>
                <nav>
                    <a href="#HeartBank.Club"><button>HeartBank.Club</button></a>
                    <!--<h4>Family Banks</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#backend-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>
                    <h4>Kids' Banks</h4>
                    <menu>
                        <li><a href="#backend-podcast">Podcast: Motivation & Coding Music</a></li>
                        <li><a href="#backend-code">Interactive Coding Exercises</a></li>
                        <li><a>Remote Pair Programming on Discord</a></li>
                        <li><a>Students' Solo Projects on Replit</a></li>
                    </menu>
                    <h4>Ticket Booths</h4>
                    <menu>
                        <li><a>Live Demo: Music Apps</a></li>
                        <li><a>Syntax Flashcards</a></li>
                        <li><a>Students' Writings on Medium</a></li>
                        <li><a>Mock Interviews on YouTube</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Studio</h3>
                <nav>
                    <a href="#HeartBank.Studio"><button>HeartBank.Studio</button></a>
                    <!--<h4>Box Office</h4>
                    <menu>
                        <li><a>Watch Videos on Udemy</a></li>
                        <li><a>Read Textbook on Medium</a></li>
                        <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Market</h3>
                <nav>
                    <a href="#HeartBank.Market"><button>HeartBank.Market</button></a>
                    <!--<h4>Metaverse</h4>
                    <menu>
                        <li><a>NFTs</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>CEO</h3>
                <nav>
                    <a href="#HeartBank.CEO"><button>HeartBank.CEO</button></a>
                    <!--<h4>Decentralized Companies</h4>
                    <menu>
                        <li><a>Women & Minorities</a></li>
                        <li><a>Ukrainian Refugees</a></li>
                        <li><a>Cambodian Genocide</a></li>
                    </menu>
                    <h4>Tech Economies</h4>
                    <menu>
                        <li><a>Cambodia</a></li>
                        <li><a>Ukraine</a></li>
                        <li><a>United States</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Fund</h3>
                <nav>
                    <a href="#HeartBank.Fund"><button>HeartBank.Fund</button></a>
                    <!--<h4>Tech CEOs</h4>
                    <menu>
                        <li><a>Seeds</a></li>
                    </menu>
                    <h4>Family Orchards</h4>
                    <menu>
                        <li><a>Lands</a></li>
                    </menu>
                    <h4>Business Profile</h4>
                    <menu>
                        <li><a>Lands</a></li>
                    </menu>
                    <h4>Healthcare?</h4>
                    <menu>
                        <li><a>Lands</a></li>
                    </menu>-->
                </nav>
            </li>
            <li>
                <h3>Government</h3>
                <nav>
                    <h4>United States</h4>
                    <menu>
                        <li><a>Nonprofit Bookeeping</a></li>
                    </menu>
                    <h4>Cambodia</h4>
                    <menu>
                        <li><a>eFile</a></li>
                        <li><a>#Vote-a-Thon</a></li>
                        <li><a>Land Registry</a></li>
                    </menu>
                    <h4>Ukraine</h4>
                    <menu>
                        <li><a>Reconstruction</a></li>
                    </menu>
                </nav>
            </li>
        </ul>
        <aside>
            <select onchange="this.getRootNode().host.changeLanguage(event)">
                <option value="en">English</option>
                <option value="km" disabled>Khmer</option>
                <option value="es" disabled>Spanish</option>
                <option value="ru" disabled>Russian</option>
                <option value="zh" disabled>Chinese</option>
            </select>
        </aside>
    </header>
`;

export default template;