import dayjs from 'dayjs';

export const validateTime = (value, helpers) => {
    const time = dayjs(value, 'HH:mm');
      if (!time.isValid()) {
        return helpers.error('any.invalid');
      }
    return time.toDate();
};
