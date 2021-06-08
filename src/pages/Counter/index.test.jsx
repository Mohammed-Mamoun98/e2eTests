import Enzyme from "enzyme";
import Counter from ".";
import "../../utils/testing/setup";

describe("COUNTER PAGE", () => {
  const counter = Enzyme.mount(<Counter />);
  const counterValueNode = counter.find("h4#counter-value");
  const minusCountBtn = counter.find("#minus-count");
  const addCountBtn = counter.find("#add-count");

  test("there is two btns", () => {
    expect(counter.find("button").length).toEqual(3);
  });

  test("counter is defaulted to 0", () => {
    const counterValue = +counterValueNode.text();
    expect(counterValue).toEqual(0);
  });
  test("first btn increase the counter value", () => {
    const minusCountBtn = counter.find("#minus-count");
    addCountBtn.simulate("click");      //1
    addCountBtn.simulate("click");      //2
    minusCountBtn.simulate("click");    //1
    const counterValue = +counterValueNode.text();
    expect(counterValue).toEqual(1);
  });

  test("prevent negative count", () => {
    minusCountBtn.simulate("click");
    minusCountBtn.simulate("click");
    const counterValueNode = counter.find("h4#counter-value");

    const counterValue = +counterValueNode.text();
    expect(counterValue).toEqual(-1);
  });
});
