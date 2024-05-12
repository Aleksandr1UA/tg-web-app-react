import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './components/form/Form'
import Header from './components/header/Header'
import ProductList from './components/product-list/ProductList'
import { useTelegram } from './hooks/useTelegram'

import './App.css'

function App() {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route index element={<ProductList />} />
				<Route path={'form'} element={<Form />} />
			</Routes>
		</div>
	)
}

export default App
