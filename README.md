#Usage

Usage is very straight forward.


```javascript
const RAF = require('motion-tween-raf-engine')

const loop = new RAF(frameRate, ({ time, delta }) => {
    // do something
}, autoStart)

loop.start()
loop.stop()
loop.resume()
loop.reset()
```

* frameRate: from 1 to 60
* callback: will receive delta and time
* autoStart: defaults to true
