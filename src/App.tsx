import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
	const [count, setCount] = useState(0)

	return (
		<HelmetProvider>
			<Helmet>
				<title> Дайджест Дайджест Дайджест Дайджест</title>
				<meta name='title' content=' Дайджест Дайджест Дайджест Дайджест' />
				<meta
					name='description'
					content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
				/>

				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://seo-test-gules.vercel.app/' />
				<meta
					property='og:title'
					content=' Дайджест Дайджест Дайджест Дайджест'
				/>
				<meta
					property='og:description'
					content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
				/>
				<meta
					property='og:image'
					content='https://metatags.io/images/meta-tags.png'
				/>

				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://seo-test-gules.vercel.app/'
				/>
				<meta
					property='twitter:title'
					content=' Дайджест Дайджест Дайджест Дайджест'
				/>
				<meta
					property='twitter:description'
					content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
				/>
				<meta
					property='twitter:image'
					content='https://metatags.io/images/meta-tags.png'
				/>
			</Helmet>
			<>
				{/* Content here */}
				<div>
					<a href='https://vitejs.dev' target='_blank'>
						<img src={viteLogo} className='logo' alt='Vite logo' />
					</a>
					<a href='https://react.dev' target='_blank'>
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
				</div>
				<h1>Vite + React</h1>
				<div className='card'>
					<button onClick={() => setCount(count => count + 1)}>
						count is {count}
					</button>
					<p>
						Edit <code>src/App.tsx</code> and save to test HMR
					</p>
				</div>
				<p className='read-the-docs'>
					Click on the Vite and React logos to learn more
				</p>
			</>
		</HelmetProvider>
	)
}

export default App
