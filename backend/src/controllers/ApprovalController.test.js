const ApprovalController = require("./ApprovalController")
// @ponicode
describe("ApprovalController.store", () => {
    test("0", async () => {
        let object = [["http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "ponicode.com", "Www.GooGle.com"], ["https://api.telegram.org/bot", "www.google.com", "ponicode.com"], ["https://croplands.org/app/a/reset?token=", "https://api.telegram.org/bot", "http://base.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, false, true], io: { to: () => "C:\\\\path\\to\\folder\\" } }, { json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("1", async () => {
        let object = [["Www.GooGle.com", "https://croplands.org/app/a/reset?token=", "http://base.com"], ["https://croplands.org/app/a/confirm?t=", "http://base.com", "https://"], ["https://api.telegram.org/", "http://www.example.com/route/123?foo=bar", "ponicode.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [false, true, false], io: { to: () => "path/to/folder/" } }, { json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("2", async () => {
        let object = [["https://twitter.com/path?abc", "https://accounts.google.com/o/oauth2/revoke?token=%s", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://www.croplands.org/account/confirm?t=", "http://www.croplands.org/account/confirm?t=", "http://www.example.com/route/123?foo=bar"], ["http://www.example.com/route/123?foo=bar", "https://accounts.google.com/o/oauth2/revoke?token=%s", "https://croplands.org/app/a/confirm?t="]]
        await ApprovalController.store({ params: object, connectedUsers: [true, true, false], io: { to: () => "./path/to/file" } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("3", async () => {
        let object = [["https://", "www.google.com", "http://www.example.com/route/123?foo=bar"], ["https://croplands.org/app/a/reset?token=", "https://", "Www.GooGle.com"], ["http://base.com", "https://twitter.com/path?abc", "ponicode.com"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, false, false], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("4", async () => {
        let object = [["https://croplands.org/app/a/confirm?t=", "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"], ["http://www.croplands.org/account/confirm?t=", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", "www.google.com"], ["www.google.com", "https://", "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg"]]
        await ApprovalController.store({ params: object, connectedUsers: [true, false, false], io: { to: () => "C:\\\\path\\to\\file.ext" } }, { json: () => "\"[3,\"false\",false]\"" })
    })

    test("5", async () => {
        await ApprovalController.store(undefined, undefined)
    })
})
