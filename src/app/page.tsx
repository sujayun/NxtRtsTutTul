'use client'

import { useRouter } from 'next/navigation'

export default function HomPejFnc() {
	const NavVap = useRouter()

	return (
		<main >
			<h1 className="bg-green-200 p-8"> Welcome and Wow Working</h1>
			
			<button type="button" onClick={() => NavVap.push('/NamPej')}>
				Goto Page
			</button>
		</main>
	)
}
