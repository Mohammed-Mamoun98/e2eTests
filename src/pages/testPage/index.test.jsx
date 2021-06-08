import TestPage from ".";
import "../../utils/testing/setup";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";

// Enzyme.configure({ adapter: new Adapter() });

describe("TEST PAGE", () => {
  test("show test text in span", () => {
    const testPage = Enzyme.mount(<TestPage />);
    expect(testPage.contains(<span>test</span>)).toBe(true);
  });
});
