import { Col, Row } from 'antd'
import React from 'react'
import { Link, redirect } from 'react-router-dom'

export default function LoginPage() {

	const sendCredentials = () => {
		console.log("alo");
		return redirect("/");
	}

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-slate-50">
			<div className="h-[70vh] w-[90%] shadow-md m-auto rounded-2xl overflow-hidden bg-white">
				<Row className='h-full'>
					<Col span={15}>
						<div className="w-full h-full">
							<img src="images/login.jpg" alt="" className='w-full h-full object-cover' />
						</div>
					</Col>
					<Col span={9}>
						<div className="w-full h-full p-8">
							<h1 className='font-bold text-2xl text-center mb-6'>
								Acesse sua conta
							</h1>
							<div className='my-3'>
								<label htmlFor="E-mail" className="block mb-2 text-sm font-medium text-gray-900">E-mail</label>
								<input type="text" name="email" placeholder="exemplo@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
							</div>
							<div className='my-3'>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Senha</label>
								<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
							</div>
							<div className="my-3">
								<p className="text-right text-roxo-400 hover:text-roxo-600">
									Esqueceu sua senha?
								</p>
							</div>
							<div className="my-3">
								<button type='button' onClick={() => sendCredentials()} className='w-full block px-6 py-2 bg-roxo-500 rounded-lg border-solid border-2 font-medium text-white hover:bg-roxo-500 hover:text-white'>
									Entrar
								</button>
							</div>
							<hr className='my-5' />
							<div className="my-3">
								<p className="text-center">
									Ainda não tem uma conta?
									<br />
									<Link to={"/register"} className='text-roxo-400 hover:text-roxo-600'>
										Registre-se agora
									</Link>
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}
