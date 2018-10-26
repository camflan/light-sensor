'use strict'
let test = require('ava')
let { createElement: h } = require('react')
let ReactTestRenderer = require('react-test-renderer')
let useAmbientLightSensor = require('./')

function render(val) {
    return ReactTestRenderer.create(val)
}

test(t => {
    function Component() {
        let value = useAmbientLightSensor()
        return h('div')
    }

    let input = render(h(Component))

    t.is(input.toJSON().props.value, '...')
})
