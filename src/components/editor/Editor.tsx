import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Col, Row } from "antd";
import { ArticleProps } from "../../pages/newArticle/newArticle";

type EditorProps = {
	chooseArticle: (article: ArticleProps) => any;
};

export default function Editor({ chooseArticle }: EditorProps) {

	const editor = useRef(null);
	const [content, setContent] = useState<string | null>("");
	const [title, setTitle] = useState<string | null>("");

	/* Save te content */
	const handleSaveArticle = () => {
		chooseArticle({
			content: content,
			title: title,
		})
	}
	/* End to: Save te content */

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

	const handleUpdateContent = (event) => {
		const editorContent = event.target.value;
		setContent(editorContent);
		handleSaveArticle();
	};

	const handleUpdateTitle = (event) => {
		setTitle(event.target.value);
		handleSaveArticle();
	};

	return (
		<div>
			<Row>
				<Col span={14}>
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
						text-xl
						font-semibold
						"
							onChange={handleUpdateTitle}
						/>
					</div>
					<JoditEditor
						ref={editor}
						value={content}
						config={config}
						onBlur={(newContent) => handleUpdateContent(newContent)}

					/>
				</Col>
				<Col span={8}>
					<div className="p-7">
						<h2 className="text-2xl mb-4 font-semibold">
							{
								title
							}
						</h2>
						<div dangerouslySetInnerHTML={{ __html: content }} />
					</div>
				</Col>
			</Row>
		</div>
	)
}
