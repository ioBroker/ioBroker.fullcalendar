// Type declarations for the untyped runtime dependencies of the adapter.

declare module 'later' {
    /** Opaque result of `later.parse.*`, consumed by `later.schedule()` */
    export interface ScheduleData {
        schedules: Record<string, number[]>[];
        exceptions: Record<string, number[]>[];
        error: number;
    }

    export interface Timer {
        clear: () => void;
    }

    export interface ScheduleInstance {
        isValid: (date: Date) => boolean;
        next: (count?: number, startDate?: Date, endDate?: Date) => Date;
        prev: (count?: number, startDate?: Date, endDate?: Date) => Date;
        nextRange: (count?: number, startDate?: Date, endDate?: Date) => Date[];
        prevRange: (count?: number, startDate?: Date, endDate?: Date) => Date[];
    }

    export const parse: {
        cron: (expr: string, hasSeconds?: boolean) => ScheduleData;
        recur: () => ScheduleData;
        text: (str: string) => ScheduleData;
    };

    export const date: {
        localTime: () => void;
        UTC: () => void;
        timezone: (useLocalTime: boolean) => void;
    };

    export function schedule(sched: ScheduleData): ScheduleInstance;
    export function setTimeout(fn: () => void, sched: ScheduleData): Timer;
    export function setInterval(fn: () => void, sched: ScheduleData): Timer;
}

declare module 'suncalc2' {
    export interface SunTimes {
        solarNoon: Date;
        nadir: Date;
        sunrise: Date;
        sunset: Date;
        sunriseEnd: Date;
        sunsetStart: Date;
        dawn: Date;
        dusk: Date;
        nauticalDawn: Date;
        nauticalDusk: Date;
        nightEnd: Date;
        night: Date;
        goldenHourEnd: Date;
        goldenHour: Date;
    }

    export interface SunPosition {
        azimuth: number;
        altitude: number;
    }

    export interface MoonPosition extends SunPosition {
        distance: number;
        parallacticAngle: number;
    }

    export interface MoonIllumination {
        fraction: number;
        phase: number;
        angle: number;
    }

    export function getTimes(date: Date, latitude: number, longitude: number): SunTimes;
    export function getPosition(date: Date, latitude: number, longitude: number): SunPosition;
    export function getMoonPosition(date: Date, latitude: number, longitude: number): MoonPosition;
    export function getMoonIllumination(date: Date): MoonIllumination;
    export function addTime(angle: number, riseName: string, setName: string): void;

    const SunCalc: {
        getTimes: typeof getTimes;
        getPosition: typeof getPosition;
        getMoonPosition: typeof getMoonPosition;
        getMoonIllumination: typeof getMoonIllumination;
        addTime: typeof addTime;
    };

    export default SunCalc;
}
