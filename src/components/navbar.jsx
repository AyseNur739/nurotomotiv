import { Link } from "react-router-dom";
import "./Navbar.css"; // CSS varsa

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Nur Otomotiv</div>
            <ul className="nav-links">
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                <li><Link to="/iletisim">İletişim</Link></li>
                <li><Link to="/kampanyalar">Kampanyalar</Link></li>
                <li><Link to="/sss">S.S.S.</Link></li>
                {/* İşveren Girişi Linki */}
                <li>
                    <Link to="/admin/login" >
                        İşveren Girişi
                    </Link>
                </li>


            </ul>
        </nav>
    );
}


export default Navbar;
