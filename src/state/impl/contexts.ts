import { State, Context } from "../interfaces"
import { DayState } from "./states";

export default class Safe implements Context {

    private state: State = DayState.getInstance();

    // 時刻の設定
    setClock(hour: number): void {
        let clockString: string = "現在時刻は "
        if (hour < 10) {
            clockString += "0" + hour + ":00";
        } else {
            clockString += hour + ":00";
        }
        console.log(clockString);

        this.state.doClock(this, hour);
    }

    // 状態変化
    changeState(state: State): void {
        console.log(`${this.state}から${state}へ状態が変化しました。`);
        this.state = state;
    }

    // 警備センター呼び出し
    callSecurityCenter(msg: string): void {
        // todo
        console.log(`Call! ${msg} \n`)
    }

    // 警備センター記録
    recordLog(msg: string): void {
        // todo
        console.log(`Call! ${msg} \n`)
    }
}