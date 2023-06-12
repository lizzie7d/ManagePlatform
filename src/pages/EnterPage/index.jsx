import { Link } from 'react-router-dom';
import './style.css';
import enterIcon from '../../assets/rectangle_49_u4.svg'
const EnterPage = () => {
    return (
        <div className='enter-container'>

            <div className="enter-box">
                <div className="enter-title">
                    酉阳800云稻米认养
                </div>
                <Link className="enter-btn" to={'login'}>进入系统</Link>

            </div>

        </div>
    )
}
export default EnterPage;