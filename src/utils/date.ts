export const datetimeFormat = (datetime:Date, locale:string) => {
const day = datetime.getDate()
const month = datetime.toLocaleString("default", {month: 'long'})
const year = datetime.getFullYear()
const hour = datetime.toLocaleString("default", {hour: "2-digit", hour12: false} )
const minute = datetime.getMinutes().toString().padStart(2,"0")
return `${day} ${month} ${year} ${hour}:${minute} ${locale}`
}