export const timeStampToDateHandler = (timeStamp) => {
  const dateObject = new Date(timeStamp);

  const humanDateFormat = dateObject.toLocaleString();
  
  return `${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getDate()}/${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getMonth()}/${new Date(
    humanDateFormat.split(",")?.[0]?.split("/").reverse().join("/")
  ).getFullYear()}`;
};
