import './style.css';
import footerImage from '/fazenda-logo.png'

export default function Footer() {
    return (
        <footer>
            <img className="footer-image" src={footerImage} alt="" />
        </footer>
    )
}