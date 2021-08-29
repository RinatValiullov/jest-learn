import { createObject } from '../createObject';
// const createObject = require("./createObject");

test("check objects equality", () => {
  const srcObj = createObject("nick", "4ront");
  expect(srcObj).toEqual({ nick: "4ront" });
});
