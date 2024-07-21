import { datetimeFormat } from "../../src/utils/date"

describe("Date", () => {
    describe("datetimeFormat", () => {
        it("should return date fomat is 'dd MMMM yyyy HH:mm TH' when current locale is Thailand", () => {
            const datetime = new Date(2024,6,6,18,33)
            const result = datetimeFormat(datetime,"TH")
            expect(result).toEqual("6 July 2024 18:33 TH")
        })

        it("should return date fomat is 'dd MMMM yyyy HH:mm US' when current locale is United State", () => {
            const datetime = new Date(2024,6,6,18,33)
            const result = datetimeFormat(datetime,"US")
            expect(result).toEqual("6 July 2024 18:33 US")
        })

        it("should return date fomat is 'dd MMMM yyyy HH:mm US' should display hour and minute with 2 digit", () => {
            const datetime = new Date(2024,6,6,7,5)
            const result = datetimeFormat(datetime,"US")
            expect(result).toEqual("6 July 2024 07:05 US")
        })
    })
})