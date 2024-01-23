
import { Outlet } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'

export default function AuthorPage() {
	return (
		<div className="container">
			<HeaderComponent />
			<Outlet />
		</div>
	)
}
