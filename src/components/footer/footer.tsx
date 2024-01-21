import { Col, Row } from 'antd'
// import React from 'react'
// import { FaStar } from 'react-icons/fa';

export default function Footer() {

	// const data = [
	// 	"Programação",
	// 	"Ciência de Dados",
	// 	"Auto-aperfeiçoamento",
	// 	"Escrita",
	// 	"Política",
	// 	"Tecnologia",
	// 	"Relacionamentos",
	// 	"Aprendizado de máquina",
	// 	"Produtividade",
	// ];

	// const autores = [
	// 	"Thiago Bruno",
	// 	"Alex Rodrigo",
	// 	"Kevin Alexandre",
	// ];

	return (
		<div className="bg-slate-100">

			<div className="container py-8">
				{/* <h2 className='font-bold text-4xl mb-8'>
				Assuntos do momento
				</h2>
				<p className='mb-3'>
				Confira as últimas tendências e notícias que estão em alta agora.
			</p> */}


				<Row>
					<Col span={15}>
						<h2 className='font-bold text-4xl mb-3'>
							Newsletter
						</h2>
						<h3 className='text-xl w-[50%]'>
							Inscreva-se para receber as melhores notícias, esteja conectado com o mundo!
						</h3>
						<div className="flex bg-gray-200 rounded-full p-1 shadow-lg w-[70%] mt-4">
							<input type="text" className='bg-transparent px-4 placeholder:text-slate-500 flex-1 focus:outline-none' placeholder='Insira seu e-mail' />
							<button className='block px-6 py-2 bg-roxo-500 rounded-full font-medium text-white hover:bg-roxo-600 flex-2'>
								Quero me inscrever
							</button>
						</div>
					</Col>
					<Col span={4}>
						{/* <h5 className='font-semibold text-lg mb-3'>
						Autores em alta
						</h5>
						{
							autores.map(autor => {
								return (
									<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-3">
									<div className="w-12 h-12 rounded-md overflow-hidden">
									<img src="public/images/avatar.jpg" alt="" className='w-full h-full object-cover' />
									</div>
									<div>
											<p className='capitalize text-slate-600 font-bold'>
											{autor}
											</p>
											<p className='text-slate-500'>
											Categoria
											</p>
											</div>
											</div>
									<FaStar color="rgb(255, 192, 23)" />
									</div>
									)
								})
							}
					<h5 className='font-semibold text-lg mb-3'>
					Categorias
					</h5>
					<ul className='flex flex-wrap gap-x-5 gap-y-3'>
						{
							data.map(item => {
								return (
									<li className='bg-roxo-100 px-5 py-1 rounded-full'>
										{item}
										</li>
								)
							})
						}
					</ul>*/}
						<h5 className='font-semibold text-lg mb-3'>
							Links
						</h5>
						<ul className='flex flex-col gap-y-3'>
							<li>
								Home
							</li>
							<li>
								Artigos
							</li>
							<li>
								Entre em Contato
							</li>
							<li>
								Privacidade
							</li>
						</ul>
					</Col>
					<Col span={4}>
						<h5 className='font-semibold text-lg mb-3'>
							Categorias
						</h5>
						<ul className='flex flex-col gap-y-3'>
							<li>Programação</li>
							<li>Ciência de Dados</li>
							<li>Auto-aperfeiçoamento</li>
							<li>Escrita</li>
						</ul>
					</Col>
				</Row>
			</div>
		</div>
	)
}
