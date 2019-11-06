import React from 'react';
import { Provider } from 'react-redux'

import store from './store'
import LinkList from './components/LinkList'
import ListCounter from './components/listCounter'

const App = () => {
	return (
		<Provider store={store}>
			<ListCounter />
			<LinkList />
		</Provider>
	);
}

export default App;

