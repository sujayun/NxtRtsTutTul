import { GetUsrApiFnc } from '@/ApiSrcFdr/UsrApi';

export default async function NamPejFnc() {

	let UsrAryVar = await GetUsrApiFnc()

	return (
		<main>
			<h1> Name Page </h1>
			<ul>
				{UsrAryVar.map((ItmVar:any) => <li>{ItmVar.NamVak}</li>)}
			</ul>
		</main>
	)
}