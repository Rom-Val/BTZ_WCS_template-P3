import '../../../styles/UserList.css';
import inovin_logo from '../../../assets/logo_inovin_noir.png';

function Dashboard() {
    return (
        <div className="Dashboard">
                <h1>Dashboard Admin</h1>
                <div className='dashboard-img'>
                 <img src={inovin_logo} alt='logo inovin' />
                </div>
        </div>
    );
}

export default Dashboard; 