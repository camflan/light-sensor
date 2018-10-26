import React from 'react'
import { render } from 'react-dom'
import useAmbientLightSensor from './'

function App() {
    let illuminance = useAmbientLightSensor()

    if (illuminance == null) {
        return 'Loading'
    }

    return <div>{illuminance} lux</div>
}

render(<App />, window.root)
