export interface State {
    // 時刻設定
    doClock(context: Context, hour: number): void;

    // 金庫使用
    doUse(context: Context): void;

    // 非常ベル
    doAlarm(context: Context): void;

    // 通常通話
    doPhone(context: Context): void;
}

export interface Context {
    // 時刻の設定
    setClock(hour: number): void;

    // 状態変化
    changeState(state: State): void;

    // 警備センターの呼び出し
    callSecurityCenter(msg: string): void;

    // 警備センター記録
    recordLog(msg: string): void;
}