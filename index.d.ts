declare function timestamp(pattern?: string | Date, date?: Date): string;

declare namespace timestamp {
  function utc(pattern?: string | Date, date?: Date): string;
}
export = timestamp;
