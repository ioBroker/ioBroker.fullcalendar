// Ambient declaration for the untyped `suncalc2` package.
// Must stay free of top-level import/export so that `declare module` is treated
// as an ambient declaration rather than a module augmentation.

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

    const SunCalc: {
        getTimes: (date: Date, latitude: number, longitude: number) => SunTimes;
    };

    export default SunCalc;
}
