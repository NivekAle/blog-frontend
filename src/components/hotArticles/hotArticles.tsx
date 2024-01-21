import { Col, Row } from 'antd';
import React from 'react';
import { CardArticle } from "../cardArticle/cardArticle";

export default function HotArticles() {

	const data = [
		{
			"title": "Top 10 Data & AI Trends for 2024",
			"published_in": "12/02/2023",
			author: {
				name: "Kevin",
				avatar: "d.jpg"
			},
			likes: 41,
			category: "Tecnology"
		},
		{
			"title": "O “termostato de gordura” do corpo, parte 1",
			"published_in": "04/01/2024",
			author: {
				name: "Thiago Bruno",
				avatar: "d.jpg"
			},
			likes: 12,
			category: "Agricultura"
		},
		{
			"title": "A climatização mundial",
			"published_in": "19/12/2023",
			author: {
				name: "Thiago Bruno",
				avatar: "d.jpg"
			},
			likes: 12,
			category: "Ambiente"
		},
		{
			"title": "A climatização mundial",
			"published_in": "19/12/2023",
			author: {
				name: "Thiago Bruno",
				avatar: "d.jpg"
			},
			likes: 12,
			category: "Ambiente"
		},
	];

	return (
		<div className="container my-12">
			<h2 className='font-bold text-4xl mb-5 leading-[40px]'>
				Tendências
			</h2>
			<Row gutter={[40, 30]}>
				{data.map((item, index) => (
					<Col key={index} span={6}>
						<CardArticle
							title={item.title}
							published_in={item.published_in}
							author={{ avatar: "d", name: item.author.name }}
							likes={item.likes}
							category={item.category}
						/>
					</Col>
				))}
			</Row>
		</div>
	)
}
