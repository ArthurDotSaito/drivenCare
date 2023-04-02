import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
dayjs.extend(customParseFormat);

export const validateDate = (value, helpers) => {
    const { day } = value;

    if (dayjs(day, 'YYYY-MM-DD').isBefore(dayjs(), 'day')) {
      return helpers.error('any.invalid');
    }

  // Verify if is saturday or sunday
    if (dayjs(day, 'YYYY-MM-DD').day() === 6 || dayjs(day, 'YYYY-MM-DD').day() === 0) {
      return helpers.error('any.invalid');
    }

  return value;
};

