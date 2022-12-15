import Safe from "./state/impl/contexts"

export const stateContext = new Safe();
stateContext.setClock(0);

let hour = 1;
setInterval(() => {
    stateContext.setClock(hour);
    hour++;
    hour = hour === 24 ? 0 : hour;
}, 1000);
