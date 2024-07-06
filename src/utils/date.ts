export const datetimeFormat = (datetime:Date) => {
const day = datetime.getDate()
const month = datetime.toLocaleString("default", {month: 'long'})
const year = datetime.getFullYear()
const hour = datetime.getHours()
const minute = datetime.getMinutes()
return `${day} ${month} ${year} ${hour}:${minute} TH`
}