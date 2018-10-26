'use strict'
let { useState } = require('react')

function useAmbientLightSensor() {
    let [illuminance, setIlluminance] = useState(null)

    function handleIlluminanceChange(sensor) {
        setIlluminance(sensor.illuminance)
    }

    if ('AmbientLightSensor' in window) {
        const sensor = new AmbientLightSensor()
        sensor.onreading = handleIlluminanceChange

        sensor.onerror = event => {
            throw new Error(event)
        }

        sensor.start()
    } else {
        throw new Error(
            'This device does not support access to AmbientLightSensor.'
        )
    }

    return illuminance
}

module.exports = useAmbientLightSensor
