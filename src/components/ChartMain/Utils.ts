const MONTHS = [
    'MON',
    'TUE',
    'WED',
    'THURS',
    'FRI',
    'SAT',
    'SUN',
];

export function months(config: { count?: number, section?: number }): string[] {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values: string[] = [];
    var i, value;
  
    for (i = 0; i < count; ++i) {
      value = MONTHS[Math.ceil(i) % 12];
      if (section) {
        values.push(value.substring(0, section));
      } else {
        values.push(value);
      }
    }
  
    return values;
}
