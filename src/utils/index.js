export const timeStampToDateHandler = (timeStamp) => {
  const dateObject = new Date(timeStamp);

  const humanDateFormat = dateObject.toLocaleString();

  return humanDateFormat;
};
