import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    // insert code here using defined params above
  };
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    // insert code here using defined params above
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
   // insert code here using defined params above
  };
};

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    // insert code here using defined params above
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
