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
				<title>My Page Title</title>
				<meta property='og:title' content='My Page Title' />
				<meta property='og:description' content='My Page Description' />
				<meta
					property='og:image'
					content='https://media.gettyimages.com/id/2131911406/photo/married-couple-of-mixed-ethnicity-visiting-a-japanese-shrine.jpg?s=2048x2048&w=gi&k=20&c=TO3jRuMT_698Gb7R1s5A68_HUcy_peEH0Of-KD63wag='
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
