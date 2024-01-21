import React from 'react';

type cardArticleSMTypes = {
	title: string;
	published_in: string;
	author: {
		name: string,
		avatar: string
	}
	likes: number;
	category: string;
}

export function CardArticle(props: cardArticleSMTypes) {
	return (
		<div className="hover:-translate-y-1 transition-transform">
			<div className="h-[200px] bg-slate-50 rounded-lg overflow-hidden shadow-md">
				<img src="public/images/blog-1.jpg" alt="" className='h-full object-cover w-full' />
			</div>
			<div className="mt-4">
				<p className='font-sm mb-2 text-roxo-500'>
					{
						props.category
					}
				</p>
				<h4 className='font-bold text-gray-900 text-[16px] mb-4 leading-5'>
					{props.title}
				</h4>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full overflow-hidden">
							<img src="public/images/avatar.jpg" alt="" />
						</div>
						<p className='capitalize text-slate-500'>
							{
								props.author.name
							}
						</p>
					</div>
					<p className='text-slate-500'>
						{
							props.published_in
						}
					</p>
				</div>
			</div>
		</div>
	)
}
