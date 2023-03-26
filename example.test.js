// test("adds 1 + 2 to equal 3", () => {
// it("adds 1 + 2 to equal 3", () => {
//   expect(1 + 2).toBe(3);
// });
describe("expect test", () => {
  it("37 to eqal 37", () => {
    expect(37).toBe(37);
  });
  it("{age: 39} to eqal {age: 39}", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
  });
  // 문자열 길이
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });
  it(".toHaveProperty", () => {
    expect({ name: "Mark" }).toHaveProperty("name");
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });
  it(".toBeFalsy", () => {
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  // 에러 타입에서 많이 사용 상속받는지 ...
  it(".toBeInstanceOf", () => {
    class Foo {}
    expect(new Foo()).toBeInstanceOf(Foo);
  });
});
