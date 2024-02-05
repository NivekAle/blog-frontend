import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Article } from "../../types/article.type";
import { Jodit } from "jodit";

type EditorProps = {
	dataArticle: (data: Article) => Promise<any>;
}

export default function Editor({ dataArticle }: EditorProps) {

	const editor = useRef<Jodit>(null);

	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");

	const config = {
		readonly: false,
		height: 330,
		uploader: {
			url: "../../../public/uploads/",
			format: "json",
			method: "POST",
			filesVariableName: "files",
		},
		imageeditor: {
			closeAfterSave: true,
			crop: false,
			resize: true,
			width: 500
		},
		disableResize: false,

	};

	const handleUpdateContent = () => {
		const editorContent = editor.current?.value;
		if (editorContent) {
			setContent(editorContent);
		}
	};

	const handleUpdateTitle = (event: any) => {
		setTitle(event.target.value);
	};

	const handlePublish = async () => {

		const newArticle: Article = {
			content: content,
			title: title,
			published_in: new Date().toISOString().slice(0, 10),
			authorId: 1,
		}

		validateFormArticle(newArticle.title, newArticle.content);

		dataArticle(newArticle);
	}


	return (
		<div>
			<div className="flex justify-between items-center py-4 mb-4">

				<p className='text-slate-500'>
					Escrevendo por&nbsp;
					<strong className='font-semibold text-gray-800'>
						Kevin Alexandre
					</strong>
				</p>

				<button type='button' onClick={handlePublish} className='block px-6 py-2 bg-roxo-500 rounded-full text-sm font-medium text-white hover:bg-roxo-700 hover:text-white'>
					Publicar
				</button>

			</div>
			<div className="w-full md:mx-auto">
				<div className='my-3'>
					<input
						type="text"
						name="email"
						placeholder="Seu título aqui."
						className="
						bg-transparent
						border-gray-300
						border-solid
						border-[.5px]
						text-gray-900
						rounded-lg
						focus:outline-dashed
						focus:outline-[2px]
						focus:outline-gray-300
						focus:border-transparent
						block
						w-full
						py-4
						px-5
						text-lg
						font-semibold
						"
						onBlur={handleUpdateTitle}
					/>
				</div>
				<JoditEditor
					ref={editor}
					value={content}
					config={config}
					onBlur={handleUpdateContent}

				/>
			</div>

		</div>
	)
}


function validateFormArticle(title: string, content: string) {

	const inputs = [title, content];
	let erros = false;

	inputs.forEach((el) => {
		console.log("aqui");
		if (el == "") {
			erros = true;
		}
	});

	if (erros) {
		alert("Preencha os campos corretamente!");
		throw new Error('Break Script');
	}
}