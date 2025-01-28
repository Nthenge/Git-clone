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
