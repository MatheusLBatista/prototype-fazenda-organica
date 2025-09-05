import './style.css'
import fazendaIcon from "/fazenda-logo.png"

export default function Header() {

    return (
        <header>
            <nav className="nav-bar" id="beginning">
                <ul>
                    <a className="nav-bar-link" href="#beginning"><li>Início</li></a>
                    <a className="nav-bar-link" href="#product"><li>Produtos</li></a>
                    <a className="nav-bar-link" href="#"><li>Quem somos</li></a>
                </ul>
            </nav>

            <div className="fazenda-background">
                <div className="fazenda-info">
                    <div className="fazenda-icon">
                        <img src={fazendaIcon} alt="" />
                    </div>
                    <div className="fazenda-heading">
                        <h1>Fazenda Orgânica</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}