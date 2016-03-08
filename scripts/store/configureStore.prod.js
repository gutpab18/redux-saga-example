import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialStore) {
	const store = createStore(
		rootReducer,
		initialStore,
		applyMiddleware(
			createSagaMiddleware(rootSaga)
		)
	);

	return store;
}
