import React, { useState } from 'react'
import Editor from '../../components/editor/Editor'

export type ArticleProps = {
	title: string | null;
	content: string | null;
}

export default function NewArticlePage() {

	const [newArticle, setNewArticle] = useState<ArticleProps | null>(null);

	const handleArticleFromChild = (article: ArticleProps) => {
		console.log("alo, está no pai");

		setNewArticle(article);

		console.log(newArticle);

	};

	return (
		<div className="my-4">
			<div className="flex justify-between items-center border-b-[1px] border-solid py-4 mb-4">
				<div className="">
					<p className='text-slate-500'>
						Escrevendo por&nbsp;
						<strong className='font-semibold text-gray-800'>
							Kevin Alexandre
						</strong>
					</p>
				</div>
				<button type='button' className='block px-6 py-2 bg-roxo-500 rounded-full text-sm font-medium text-white hover:bg-roxo-700 hover:text-white'>
					Publicar
				</button>
			</div>
			<div className="w-full md:mx-auto">
				<Editor chooseArticle={handleArticleFromChild} />
			</div>
		</div>
	)
}
