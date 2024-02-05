import axios, { AxiosError, AxiosResponse } from "axios";
import { Article } from "../types/article.type";

const api = axios;

api.defaults.baseURL = "http://localhost:3000/";

export const articleApi = {
	insert: async function (data: Article) {

		try {
			const response: AxiosResponse = await axios.post("post/", data);
			return response.data;
		} catch (err) {

			const error = err as AxiosError;
			return error.response?.data;
		}

	}

};
