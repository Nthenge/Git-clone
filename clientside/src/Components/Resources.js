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