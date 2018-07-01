import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

const DEV = window.location.href.includes('localhost');

export default function configureStore() {
	const middleWare = () => {
		if (DEV) {
			const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

			return composeEnhancers(applyMiddleware(epicMiddleware));
		}

		return applyMiddleware(epicMiddleware);
	};

	const store = createStore(
		rootReducer,
		middleWare()
	);

	epicMiddleware.run(rootEpic);

	return store;
}
