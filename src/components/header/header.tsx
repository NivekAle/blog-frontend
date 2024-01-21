import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
	return (
		<header className='h-[10vh] mb-6'>
			<div className="container h-full">
				<nav className='flex items-center justify-between h-full text-sm'>
					<a href="" className='block font-bold text-2xl'>
						Logo
					</a>
					<ul className='flex items-center gap-10 font-medium absolute left-[50%] translate-x-[-50%]'>
						<li>
							Home
						</li>
						<li>
							Blog
						</li>
						<li>
							Contato
						</li>
						<li>
							Escreva
						</li>
					</ul>
					<ul>
						<li>
							<Link to={"login"} className='block px-6 py-2 border-roxo-500 rounded-full border-solid border-2 font-medium text-roxo-600 hover:bg-roxo-500 hover:text-white'>
								Entrar
								/
								Registrar
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
