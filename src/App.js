import './App.css'
import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Electronic from './components/electronic/electronic'
import Develop from './components/develop/develop'
import Dart from './components/dart/dart'
const App = () => {
	return (
		<div className='App'>
			<Header />
			<Electronic />
			<Develop />
			<Dart />
			<Footer />
		</div>
	)
}
export default App
