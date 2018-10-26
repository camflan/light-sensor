'use strict'
let { useState, useEffect } = require('react')

function useAmbientLightSensor() {
    let [illuminance, setIlluminance] = useState(null)

    function handleIlluminanceChange(sensor) {
        setIlluminance(sensor.illuminance)
    }

    useEffect(function() {
        let sensor;
        
        if ('AmbientLightSensor' in window) {
            sensor = new AmbientLightSensor()
            sensor.onreading = handleIlluminanceChange

            sensor.onerror = (event) => {
                throw new Error(event)
            }

            sensor.start()
        }

        return function() {
            if (sensor) sensor.stop()
        }
    }, [])

    return illuminance
}

module.exports = useAmbientLightSensor
