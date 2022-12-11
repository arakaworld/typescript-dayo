/**
 *
 */
class DayState implements State {
    private static singleton: DayState = new DayState()

    private constructor() {
    }

    public static getInstance(): State {
        return this.singleton;
    }

    testdayo(): string {
        return "DayState test desu !"
    }

    doClock(context: Context, hour: number): void {
        throw new Error("Method not implemented.");
    }

    doUse(context: Context): void {
        throw new Error("Method not implemented.");
    }

    doAlarm(context: Context): void {
        throw new Error("Method not implemented.");
    }

    doPhone(context: Context): void {
        throw new Error("Method not implemented.");
    }
}

export { DayState }