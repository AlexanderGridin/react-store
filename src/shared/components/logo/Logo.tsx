import logo from '../../../assets/logo.svg';
import './Logo.css';

const Logo = (): JSX.Element => {
	return (<div className='Logo'>
		<img className='Logo__icon' src={logo} alt="Company logo"/>
		<p className='Logo__text'>Womazing</p>
	</div>)
}

export default Logo;
