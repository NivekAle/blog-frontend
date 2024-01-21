import React from 'react';

import { Col, Row } from 'antd'

import { AiOutlineLike } from 'react-icons/ai'
import { GoCommentDiscussion } from 'react-icons/go'
import { IoIosLink } from 'react-icons/io'

export default function HighlightArticles() {
	return (
		<div className="container my-12">
			<h2 className='font-bold text-4xl mb-8'>
				Destaques da semana
			</h2>
			<Row gutter={[30, 0]}>
				<Col span={15}>
					<div className="">
						<div className="h-[370px] w-full overflow-hidden rounded-lg mb-4">
							<img src="public/images/blog-1.jpg" alt="" className='w-full h-full object-cover' />
						</div>
						<div className="flex items-center justify-between mb-1">
							<p className="font-sm mb-1 text-roxo-500 text-lg">
								Tecnology
							</p>
							<div className="flex items-center gap-5">
								<p className='mb-0 text-center'>
									<AiOutlineLike size={20} />
									20
								</p>
								<p className='mb-0 text-center'>
									{/* <FaRegCommentAlt size={16} /> */}
									<GoCommentDiscussion size={20} />
									3
								</p>
								<p className='mb-0 text-center'>
									<IoIosLink size={20} />
									2
								</p>
							</div>
						</div>
						<h4 className='font-bold text-2xl mb-4'>
							The Algorithmic Nature of James Brown’s “Cold Sweat”
						</h4>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 rounded-full overflow-hidden">
									<img src="public/images/avatar.jpg" alt="" className='w-full h-full object-cover' />
								</div>
								<p className='capitalize text-slate-500'>
									Author Name
								</p>
							</div>
							<p className='text-slate-500'>
								18 de Janeiro, 2024
							</p>
						</div>
					</div>
				</Col>
				<Col span={9}>
					<Row>
						<Col>
							<div className="flex flex-row gap-4 mb-4">
								<div className="w-28 h-28 rounded-md overflow-hidden">
									<img src="public/images/blog-1.jpg" alt="" className='w-full h-full object-cover' />
								</div>
								<div className="">
									<h5 className='font-medium text-[16px]'>
										At Skywalker Ranch We Were
									</h5>
									<p className='text-slate-500'>
										A Photoshoot with George Lucas & Yoda
									</p>
								</div>
							</div>
						</Col>

						<Col>
							<div className="flex flex-row gap-4 mb-4">
								<div className="w-28 h-28 rounded-md overflow-hidden">
									<img src="public/images/blog-1.jpg" alt="" className='w-full h-full object-cover' />
								</div>
								<div className="">
									<h5 className='font-medium text-[16px]'>
										At Skywalker Ranch We Were
									</h5>
									<p className='text-slate-500'>
										A Photoshoot with George Lucas & Yoda
									</p>
								</div>
							</div>
						</Col>
						<Col>
							<div className="flex flex-row gap-4 mb-4">
								<div className="w-28 h-28 rounded-md overflow-hidden">
									<img src="public/images/blog-1.jpg" alt="" className='w-full h-full object-cover' />
								</div>
								<div className="">
									<h5 className='font-medium text-[16px]'>
										At Skywalker Ranch We Were
									</h5>
									<p className='text-slate-500'>
										A Photoshoot with George Lucas & Yoda
									</p>
								</div>
							</div>
						</Col>
					</Row>

				</Col>
			</Row>
		</div>
	)
}
