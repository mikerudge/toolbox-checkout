import "../styles/globals.css"

import { SWRConfig } from "swr"

import Navbar from "../components/Navbar"

import type { AppProps } from "next/app"
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			{/* @ts-expect-error - Something funky going on with the way React Types is handling children */}
			<SWRConfig
				value={{
					fetcher: async (resource, init) => {
						const res = await fetch(resource, init)
						return await res.json()
					},
				}}
			>
				<Navbar />
				<main className='flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4'>
					<Component {...pageProps} />
				</main>
				<footer></footer>
			</SWRConfig>
		</div>
	)
}

export default MyApp
