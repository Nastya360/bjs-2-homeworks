class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback) {

        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.includes(time) = true) {
            console.warn('Уже присутствует звонок на это же время');
        }

        const newAlarm = {
            time,
            callback,
            canCall: true
        };
        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter
            (alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        return "${ hours }:${ minutes }";
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime(); //создаем новый интервал который каждую сек. выполняет перебор

            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            }); //проверка на соответвие времени и того что будильник еще не срабатывал + отмечаем что будильник сработал (если условия выполнились)
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => { alarm.canCall = true });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];

    }


}