export const ProductCard = () => {
    return (
        <div className="cards">
            <div>
                <ul>
                    <li>
                        <strong><span>Github Copilot</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Write better code with AI</a></span>
                    </li>
                    <li>
                        <strong><span>Security</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Find and fix vulnerabilities</a></span>
                    </li>
                    <li>
                        <strong><span>Actions</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Automate any workflow</a></span>
                    </li>
                    <li>
                        <strong><span>Codespaces</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Instant enviroments</a></span>
                    </li>
                    <li>
                        <strong><span>Issues</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Plan and track work</a></span>
                    </li>
                    <li>
                        <strong><span>Code Review</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Manage code changes</a></span>
                    </li>
                    <li>
                        <strong><span>Discussions</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Collaborate outside of code</a></span>
                    </li>
                    <li>
                        <strong><span>Code Search</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Find more, search less</a></span>
                    </li>
                </ul>
            </div>
            <hr/>
            <div>
                <ul>
                    <li><strong>Explore</strong></li>
                    <li className="faint"><a href="">All features</a></li>
                    <li className="faint"><a href="">Documentation</a></li>
                    <li className="faint"><a href="">Github Skills</a></li>
                    <li className="faint"><a href="">Blog</a></li>
                </ul>
            </div>
        </div>
    )
} 

export const Solutions = () => {
    return(
        <div className="cards">
            <div className = "solutions-card">
                <ul>
                    <li>
                        <strong><span>By company size</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Enterprises</a></span>
                        <br/>
                        <span className="faint"><a href="#">Small and medium teams</a></span>
                        <br/>
                        <span className="faint"><a href="#">Startups</a></span>
                    </li>
                    <li>
                        <strong><span>By use case</span></strong>
                        <br/>
                        <span className="faint"><a href="#">DevSecOps</a></span>
                        <br/>
                        <span className="faint"><a href="#">DevOps</a></span>
                        <br/>
                        <span className="faint"><a href="#">CI/CD</a></span>
                    </li>
                </ul>
            </div>
            <hr/>
            <div>
                <ul>
                    <li><strong>By industry</strong></li>
                    <li className="faint"><a href="">Healthcare</a></li>
                    <li className="faint"><a href="">Finacial services</a></li>
                    <li className="faint"><a href="">Manufacturing</a></li>
                    <li className="faint"><a href="">Goverment</a></li>
                </ul>
            </div>
        </div>
    )
}

export const Resources = () =>{
    return(
        <div className="cards">
            <div className = "solutions-card">
                <ul>
                    <li>
                        <strong><span>Topics</span></strong>
                        <br/>
                        <span className="faint"><a href="#">AI</a></span>
                        <br/>
                        <span className="faint"><a href="#">DevOps</a></span>
                        <br/>
                        <span className="faint"><a href="#">Security</a></span>
                        <br/>
                        <span className="faint"><a href="#">Software Development</a></span>
                    </li>
                    
                </ul>
            </div>
            <hr/>
            <div>
                <ul>
                    <li><strong>Explore</strong></li>
                    <li className="faint"><a href="">Learning pathways</a></li>
                    <li className="faint"><a href="">White papers, Wbooks, Webinars</a></li>
                    <li className="faint"><a href="">Customer Stories</a></li>
                    <li className="faint"><a href="">Partners</a></li>
                    <li className="faint"><a href="">Excercutive Insights</a></li>
                </ul>
            </div>
        </div>
    )
}

export const OpenSorce = () => {
    return(
        <div className="cards">
            <div className = "open-source">
                <ul>
                    <li>
                        <strong><span>Github Sponsors</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Fund open source developers</a></span>
                    </li>
                    <hr/>
                    <li>
                        <strong><span>The ReadME Project</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Github community articles</a></span>
                    </li>
                    <hr/>
                </ul>
                <ul>
                    <li><strong>Repositories</strong></li>
                    <li className="faint"><a href="">Topic</a></li>
                    <li className="faint"><a href="">Collections</a></li>
                    <li className="faint"><a href="">Trending</a></li>
                </ul>
            </div>
        </div>
    )
}

export const Enterprise = () =>{
    return (
        <div className="cards">
            <div className = "open-source">
                <ul>
                    <li>
                        <strong><span>Enterprise platform</span></strong>
                        <br/>
                        <span className="faint"><a href="#">AI-powered developer platform</a></span>
                    </li>
                    <hr/>
                </ul>
                <div>
                <ul>
                    <li>
                        <strong>Available add-ons</strong>
                    </li>
                    <li>
                        <strong><span>Advanced Security</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Enterprise-grade security features</a></span>
                    </li>
                    <li>
                        <strong><span>Github Copilot</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Enterprise-grade AI features</a></span>
                    </li>
                    <li>
                        <strong><span>Premium Support</span></strong>
                        <br/>
                        <span className="faint"><a href="#">Enterprise-grade 24/7 support</a></span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export const TopBar = () => {
    function handleMouseOver(){
        Solutions.style.display = "inline-block"
    }
    return (
<section>
            <div className="navigate">
                <ul>
                    <li><i className='bx bx-github'>Github</i></li>
                    <li>Product <i className="bx bx-arrow-down"></i></li>
                    <li onMouseOver = {handleMouseOver}>Solutions <i className="bx bx-arrow-down"></i></li>
                    <li>Resources <i className="bx bx-arrow-down"></i></li>
                    <li>Open Source <i className="bx bx-arrow-down"></i></li>
                    <li>Enterprise <i className="bx bx-arrow-down"></i></li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="login">
                <ul>
                    <li>
                        <input placeholder = "Search or jump to..."/>
                    </li>
                    <li>
                        <button className="singIn-btn">Sing in</button>
                    </li>
                    <li>
                        <button className="singUp-btn">Sing up</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}
