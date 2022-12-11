interface State {
    doClock(context: Context, hour: number): void;
    doUse(context: Context): void;
    doAlarm(context: Context): void;
    doPhone(context: Context): void;

    testdayo(): string;
}

interface Context {

}