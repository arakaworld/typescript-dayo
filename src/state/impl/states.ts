import { State, Context } from "../interfaces"

export class DayState implements State {
    private static singleton: DayState = new DayState()

    private constructor() {
    }

    public static getInstance(): State {
        return this.singleton;
    }

    doClock(context: Context, hour: number): void {
        if (hour < 9 || 17 <= hour) {
            context.changeState(NightState.getInstance());
        }
    }

    doUse(context: Context): void {
        context.recordLog("金庫使用（昼間）");
    }

    doAlarm(context: Context): void {
        context.callSecurityCenter("非常ベル（昼間）");
    }

    doPhone(context: Context): void {
        context.callSecurityCenter("通常の通話（昼間）");
    }

    toString(): string {
        return "[昼間]";
    }
}


export class NightState implements State {
    private static singleton: NightState = new NightState()

    private constructor() {
    }

    public static getInstance(): State {
        return this.singleton;
    }

    doClock(context: Context, hour: number): void {
        if (9 <= hour && hour < 17) {
            context.changeState(DayState.getInstance());
        }
    }

    doUse(context: Context): void {
        context.callSecurityCenter("非常：金庫の夜間使用！");
    }

    doAlarm(context: Context): void {
        context.callSecurityCenter("非常ベル（夜間）");
    }

    doPhone(context: Context): void {
        context.recordLog("夜間の通話録音");
    }

    toString(): string {
        return "[夜間]";
    }
}