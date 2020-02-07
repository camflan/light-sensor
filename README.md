# `@rehooks/light-sensor`

[![Greenkeeper badge](https://badges.greenkeeper.io/camflan/light-sensor.svg)](https://greenkeeper.io/)

> React hook for subscribing to the readings of your device's AmbientLightSensor

**Note:** At the moment, browser support is thin and also requires use of [Feature-Policy headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy)

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/light-sensor
```

## Usage

```js
import useAmbientLightSensor from '@rehooks/light-sensor';

function MyComponent() {
  let lux = useAmbientLightSensor();

  if(lux == null) { return "Loading" }

  return <div>{`You're device is reading ${lux} lux`}</div>;
}
```
