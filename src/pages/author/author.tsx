
import { NavLink, Outlet } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'
import { Col, Row } from 'antd'
import AuthorAvatar from '../../components/AuthorAvatar/AuthorAvatar'

export default function AuthorPage() {
	return (
		<div className="container">
			<HeaderComponent />
			<Row>
				<Col span={4}>
					<div className="py-4 px-6">
						<AuthorAvatar verticalAlign='center' />
						<hr className='my-3' />
						<h5 className="font-bold text-lg mb-4 text-roxo-500">
							Opções
						</h5>
						<ul>
							<li>
								<NavLink className="p-4 block hover:bg-roxo-50 font-semibold hover:text-roxo-400" to={"/author/new-article"}>
									Novo Post
								</NavLink>
							</li>
							<li>
								<NavLink className="p-4 block hover:bg-roxo-50 font-semibold hover:text-roxo-400" to={"/author/my-account"}>
									Minha Conta
								</NavLink>
							</li>
							<li>
								<NavLink className="p-4 block hover:bg-roxo-50 font-semibold hover:text-roxo-400" to={"/author/settings"}>
									Configurações
								</NavLink>
							</li>
						</ul>
					</div>
				</Col>
				<Col span={20}>
					<Outlet />
				</Col>
			</Row>
		</div>
	)
}
