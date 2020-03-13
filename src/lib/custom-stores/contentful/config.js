import contentful from "../../../node_modules/contentful/dist/contentful.browser.min.js";
// works with ^7.14.0

// add your configs
const space = "";
const accessToken = "";

export const client = contentful.createClient({
  space,
  accessToken
});
