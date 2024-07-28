import { Link } from 'react-router-dom'
import './style.scss'

const NotFoundPage = () => {
	return (
		<>
			<h1 className="not-found-header">
				404
			</h1>
			<p className="not-found-description">
				Something went wrong. Please, click this <Link to={"/"}>LINK</Link> to go
				Home!
			</p>
		</>
	);
};

export default NotFoundPage;