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