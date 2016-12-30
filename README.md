#Installation

```bash
$ npm install motion-tween-raf-engine --save
```

#Usage

Usage is very straight forward.

```javascript
import { RAF } from "motion-tween-raf-engine";

const loop = new RAF(frameRate, (time, delta) => {
    // do something
}, autoStart)

loop.start()
loop.stop()
loop.resume()
loop.reset()
```

* frameRate: from 1 to 60
* callback: will receive time and delta
* autoStart: defaults to true
