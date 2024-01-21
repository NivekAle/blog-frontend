import React from 'react';
import './searchBlog.css';

export default function SearchBlog() {
	return (
		<div id='searchBlog' className='my-6'>
			<div className='container h-full searchBlog-container relative overflow-hidden rounded-lg'>
				<div className="flex items-center justify-center flex-col h-full w-[50%] mx-auto text-center">
					<h2 className='font-bold text-4xl mb-5 leading-[40px]'>
						Mais de 24.00 mil artigos com diversos assuntos para você pesquisar
					</h2>
					<p className='font-normal	text-lg w-[80%]'>
						Pesquisa sobre diversos assuntos e acontecimentos pelo mundo.
					</p>
					<div className="flex bg-gray-200 rounded-full p-1 shadow-lg w-[70%] mt-4">
						<input type="text" className='bg-transparent px-4 placeholder:text-slate-500 flex-1 focus:outline-none' placeholder='Procure um artigo' />
						<button className='block px-6 py-2 bg-roxo-500 rounded-full font-medium text-white hover:bg-roxo-600 flex-2'>
							Procurar agora
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
