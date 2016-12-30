export class RAF {

    private running: boolean = false
    private frameID: number = 0;
    private elapsed: number = 0;
    private oldTime: number = 0;
    private interval: number;

    /**
     * Constructor
     * @param frameRate
     * @param callback
     * @param autoStart
     */
    constructor(private frameRate: number = 60, private callback: Function, autoStart: boolean = true) {

        this.interval = 1000 / frameRate

        /**
         * Let's Rock
         */
        if (autoStart) this.start()
    }

    /**
     * Main Loop
     * @param now
     */
    private loop(now: number) {

        if (this.running)
            this.frameID = requestAnimationFrame(now => {
                this.loop(now)
            });

        let delta = now - this.oldTime;

        /**
         * If delta is higher than 160,
         * then lets assume user has switched tabs
         * so we reset delta back to 0
         */
        if (delta > 160) delta = 0;

        this.elapsed += delta;

        if (this.elapsed >= this.interval) {

            this.callback({
                delta: this.elapsed,
                time: this.elapsed
            })

            this.elapsed %= this.interval

        }

        this.oldTime = now;

    }

    /**
     * Start everything off
     */
    public start() {
        if (!this.running) {
            this.running = true;
            this.frameID = requestAnimationFrame(now => {
                this.oldTime = now
                this.loop(0)
            });
        }
    }

    /**
     * Reset
     */
    public reset() {
        this.elapsed = 0
    }

    /**
     * stop the mechanism
     */
    public stop() {
        this.running = false;
        cancelAnimationFrame(this.frameID);
    }

    /**
     * Alias to start
     */
    public resume() {
        this.start()
    }

}
