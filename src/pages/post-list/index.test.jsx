import Enzyme, { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import PostList from ".";
import { posts } from "../../data/posts";
import "../../utils/testing/setup";

const getCurrentLocation = () => window.location.pathname;

describe("POST LIST PAGE", () => {
  const postList = mount(
    <BrowserRouter>
      <PostList />
    </BrowserRouter>,
    {
      context: {
        router: {
          location: {
            pathname: "/posts",
          },
        },
      },
    }
  );

  it("all posts links should be rendered", () => {
    const numberOfLinks = postList.find("a").length;
    expect(numberOfLinks).toBe(posts.length);
  });

  it("test the findPost method", () => {
    const links = postList.find("a");

    const urlBeforeClick = window.location.href;
    const firstLink = links.at(0);
    firstLink.simulate("click");
    firstLink.simulate("click");
    const urlAfterClick = window.location.href;
  });
});
