const template = document.createElement("template");

template.innerHTML = `
    <link rel="stylesheet" href="components/sw-header/shadow.css">
    <header>
        <section>
            <a href="/"><img src="heartbank.png"></a>
            <a href="/"><h1>HeartBank<sup>®</sup></h1></a>
        </section>
        <input id="menu-toggle" type="checkbox">
        <label class='menu-button-container' for="menu-toggle">
            <span class='menu-button'></span>
        </label>
        <nav>
            <ul>
                <li>
                    <h3>Bookeeping</h3>
                    <div>
                        <a href="#frontend-cohort"><button>Purchase Subscription</button></a>
                        <h4>Learn</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#frontend-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                        <h4>Practice</h4>
                        <menu>
                            <li><a href="#frontend-podcast">Podcast: Motivation & Coding Music</a></li>
                            <li><a href="#frontend-code">Interactive Coding Exercises</a></li>
                            <li><a>Remote Pair Programming on Discord</a></li>
                            <li><a>Students' Solo Projects on Codepen</a></li>
                        </menu>
                        <h4>Review</h4>
                        <menu>
                            <li><a>Live Demo: Music Apps</a></li>
                            <li><a>Syntax Flashcards</a></li>
                            <li><a>Students' Writings on Medium</a></li>
                            <li><a>Mock Interviews on YouTube</a></li>
                        </menu>
                        <h4>Bonus: Advanced Lessons</h4>
                        <menu>
                            <li><a>React and Redux</a></li>
                            <li><a>Web Audio Production</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Club</h3>
                    <div>
                        <a href="#backend-cohort"><button>HeartBank.Club</button></a>
                        <h4>Family Banks</h4>
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
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Studio</h3>
                    <div>
                        <a href="#ios-cohort"><button>HeartBank.Studio</button></a>
                        <h4>Box Office</h4>
                        <menu>
                            <li><a>Watch Videos on Udemy</a></li>
                            <li><a>Read Textbook on Medium</a></li>
                            <li><a href="#ios-quiz">Take Quizzes to Check Understanding</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Market</h3>
                    <div>
                        <button>HeartBank.Market</button>
                        <h4>Metaverse</h4>
                        <menu>
                            <li><a>NFTs</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>CEO</h3>
                    <div>
                        <a href="#coupon"><button>HeartBank.CEO</button></a>
                        <h4>Inclusion & Diversity</h4>
                        <menu>
                            <li><a>Women & Minorities</a></li>
                            <li><a>Ukrainian Refugees</a></li>
                            <li><a>Cambodian Genocide</a></li>
                        </menu>
                        <h4>Campuses</h4>
                        <menu>
                            <li><a>Cambodia</a></li>
                            <li><a>Ukraine</a></li>
                            <li><a>United States</a></li>
                        </menu>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <h3>Fund</h3>
                    <div>
                        <a href="#coupon"><button>HeartBank.Fund</button></a>
                        <h4>Tech CEOs</h4>
                        <menu>
                            <li><a>Seeds</a></li>
                        </menu>
                        <h4>Family Farms</h4>
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
                        </menu>
                    </div>
                </li>
            </ul>
        </nav>
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