import Tilt from 'react-tilt';
import logo from './Logo.png'; 
import './Logo.css';

const Logo = () => {
    return (
        <div>
            <Tilt className="Tilt br2 shadow-5 ma2 " options={{ max : 40 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa2">
                    <img alt="logo" src={logo}  />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;
