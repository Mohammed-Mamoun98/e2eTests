const createPost = (value) => ({ id: value, text: value });

const defaultPost = {
  text: "POST IS NOT FOUND",
  id: 0,
};

export const findPost = (id) => posts.find((post) => +post.id === +id) || defaultPost;

export const posts = [
  {
    ...createPost(16816),
  },
  {
    ...createPost(5161),
  },
  {
    ...createPost(21625),
  },
  {
    ...createPost(65165),
  },
];
