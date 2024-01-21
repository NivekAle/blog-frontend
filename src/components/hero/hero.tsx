import { Col, Row } from 'antd';
import React from 'react';

import "./hero.css";

export default function HeroComponent() {
	return (
		<div id='hero'>
			<div className='container h-full'>
				<Row className='h-full rounded-xl items-center p-10 hero-container relative overflow-hidden'>
					<Col span={12}>
						<h1 className='font-bold text-6xl mb-5 leading-[60px]'>
							Conteúdos para desenvolvedores, curiosos e artistas
						</h1>
						<p className='font-medium text-lg w-[70%]'>
							Aqui você encontra sobre histórias, estudos, notícias sobre qualquer assunto.
						</p>
						<a href="" className='block font-medium bg-roxo-500 w-max px-12 text-lg py-2 mt-5 text-white rounded-full hover:bg-roxo-600 hover:text-white'>
							Começar
						</a>
					</Col>
				</Row>
			</div>
		</div>
	)
}
