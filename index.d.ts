declare function timestamp(pattern?: string | Date, date?: Date): string
declare function timestampUTC(pattern?: string | Date, date?: Date): string
declare function setTimeZone(timezoneHoursOffset: Number): void

export default timestamp
export { timestampUTC as utc };
