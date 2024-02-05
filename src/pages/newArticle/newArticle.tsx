import Editor from '../../components/editor/Editor';
import { Article } from '../../types/article.type';
import { articleApi } from '../../api/article.api';
import { useState } from 'react';
import { Alert } from 'antd';

export default function NewArticlePage() {
	const [infoAlert, setInfoAlert] = useState<boolean>(false);
	const [alertMessage, setAlertMessage] = useState<string>('');
	const [alertType, setAlertType] = useState<"error" | "success" | "info" | "warning">('error');

	const handleRenderInfo = async (data: Article) => {
		const response: { statusCode: number; message: string } = await articleApi.insert(data);

		if (response.statusCode === 400 || response.statusCode === 404) {
			setAlertMessage(response.message);
			setAlertType("error");
		} else {
			setAlertMessage(response.message);
			setAlertType("success");

			// setTimeout(() => {
			// 	console.log("ativado")
			// 	window.location.href = "/author/";
			// }, 1000);
		}
		setInfoAlert(true);
	};

	return (
		<div className="my-4">
			<Editor dataArticle={handleRenderInfo} />
			{
				infoAlert &&
				<div className="fixed right-4 top-4">
					<Alert message={alertMessage} type={alertType} />
				</div>
			}
		</div>
	);
}
