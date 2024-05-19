import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Helmet } from 'react-helmet'

function App() {
	const [count, setCount] = useState(0)

	return (
		// <Helmet>
		// 	<title> Дайджест Дайджест Дайджест Дайджест</title>
		// 	<meta name='title' content=' Дайджест Дайджест Дайджест Дайджест' />
		// 	<meta
		// 		name='description'
		// 		content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
		// 	/>

		// 	<meta property='og:type' content='website' />
		// 	<meta property='og:url' content='https://seo-test-gules.vercel.app/' />
		// 	<meta
		// 		property='og:title'
		// 		content=' Дайджест Дайджест Дайджест Дайджест'
		// 	/>
		// 	<meta
		// 		property='og:description'
		// 		content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
		// 	/>
		// 	<meta
		// 		property='og:image'
		// 		content='https://metatags.io/images/meta-tags.png'
		// 	/>

		// 	<meta property='twitter:card' content='summary_large_image' />
		// 	<meta
		// 		property='twitter:url'
		// 		content='https://seo-test-gules.vercel.app/'
		// 	/>
		// 	<meta
		// 		property='twitter:title'
		// 		content=' Дайджест Дайджест Дайджест Дайджест'
		// 	/>
		// 	<meta
		// 		property='twitter:description'
		// 		content='Тут описание дайджеста Тут описание дайджеста Тут описание дайджеста'
		// 	/>
		// 	<meta
		// 		property='twitter:image'
		// 		content='https://metatags.io/images/meta-tags.png'
		// 	/>
		// 	<meta property='og:title' content='The Rock' />
		// 	<meta property='og:type' content='website' />
		// 	<meta
		// 		property='og:url'
		// 		content='https://www.imdb.com/title/tt0117500/'
		// 	/>
		// 	<meta
		// 		property='og:image'
		// 		content='https://ia.media-imdb.com/images/rock.jpg'
		// 	/>
		// </Helmet>
		<>
			<Helmet>
				<title>My Page Title</title>
				<meta name='description' content='This is a description of my page' />
				<meta name='keywords' content='react, meta tags, seo' />
				<meta name='author' content='Your Name' />
				<meta property='og:title' content='My Page Title' />
				<meta
					property='og:description'
					content='This is a description of my page'
				/>
				<meta property='og:image' content='https://example.com/image.jpg' />
				<meta property='og:url' content='https://example.com/my-page' />
				<meta name='twitter:title' content='My Page Title' />
				<meta
					name='twitter:description'
					content='This is a description of my page'
				/>
				<meta name='twitter:image' content='https://example.com/image.jpg' />
				<meta name='twitter:card' content='summary_large_image' />
			</Helmet>
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
	)
}

export default App
