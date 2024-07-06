import { datetimeFormat } from "./date"

describe("Date", () => {
    it("should return date fomat is 'dd MMMM yyyy HH:mm'", () => {
        const datetime = new Date(2024,6,6,18,33)
        const result = datetimeFormat(datetime)
        expect(result).toEqual("6 July 2024 18:33 TH")
    })
})