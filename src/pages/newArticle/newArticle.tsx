import React from 'react'
import { Editor } from '../../components/editor/Editor'

export default function NewArticlePage() {
	return (
		<div className="my-4">
			<div className="flex justify-between items-center border-b-[1px] border-solid py-4 mb-4">
				<div className="">
					<p className='text-slate-600'>
						escrevendo por&nbsp;
						<strong className='font-semibold'>
							Kevin Alexandre
						</strong>
					</p>
				</div>
				<button type='button' className='block px-6 py-2 bg-roxo-500 rounded-full text-sm font-medium text-white hover:bg-roxo-700 hover:text-white'>
					Publicar
				</button>
			</div>
			<div className="md:w-[50%] md:mx-auto">
				<Editor />
			</div>
		</div>
	)
}
