const createObject = require("./createObject");

test("check objects equality", () => {
  const srcObj = createObject("4ront");
  expect(srcObj).toEqual({ nick: "4ront" });
});
