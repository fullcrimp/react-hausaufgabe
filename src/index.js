import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './configureStore'
import Connector from './containers/Connector'

render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Connector />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
