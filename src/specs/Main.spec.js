import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Profiles from "../Profiles";
jest.mock("../data");

describe("The application", () => {
  let data;
  beforeAll(() => {
    data = require("../data.json");
  });

  it("should render without crashing", () => {
    renderer.create(<App />);
  });

  it("should allow shallow rendering", () => {
    data[0] = {
      id: "recWhmTAXi2OjNN2R",
      fields: {
        Name: "Ali Spittel",
        Tags: ["WebDev", "Design", "JavaScript", "CSS", "Python"],
        Blog: "https://zen-of-programming.com",
        Website: "https://alispit.tel",
        About:
          "Ali's blog The Zen of Programming is a set of resources that she wishes she had when she was learning to code, including code and design tutorials, motivational posts, and life updates.\n",
        Published: true,
        slug: "ali-spittel",
        Newsletter: "https://tinyletter.com/ali_writes_code",
        Dev: "https://dev.to/aspittel"
      },
      createdTime: "2018-09-06T22:03:29.000Z"
    };
    expect(shallow(<Profiles />)).toMatchInlineSnapshot(`
<Fragment>
  <div
    className="results-filter"
  >
    <p>
      Filter by technology
    </p>
    <div
      className="results-dropdown"
    >
      <select
        onChange={[Function]}
        value=""
      >
        <option
          value=""
        >
          Choose a filter
        </option>
        <option
          key="CSS"
          value="CSS"
        >
          CSS
        </option>
        <option
          key="Design"
          value="Design"
        >
          Design
        </option>
        <option
          key="JavaScript"
          value="JavaScript"
        >
          JavaScript
        </option>
        <option
          key="Python"
          value="Python"
        >
          Python
        </option>
        <option
          key="WebDev"
          value="WebDev"
        >
          WebDev
        </option>
      </select>
    </div>
  </div>
  <div
    className="results-container"
  >
    <Card
      key="recWhmTAXi2OjNN2R"
      person={
        Object {
          "createdTime": "2018-09-06T22:03:29.000Z",
          "fields": Object {
            "About": "Ali's blog The Zen of Programming is a set of resources that she wishes she had when she was learning to code, including code and design tutorials, motivational posts, and life updates.
",
            "Blog": "https://zen-of-programming.com",
            "Dev": "https://dev.to/aspittel",
            "Name": "Ali Spittel",
            "Newsletter": "https://tinyletter.com/ali_writes_code",
            "Published": true,
            "Tags": Array [
              "WebDev",
              "Design",
              "JavaScript",
              "CSS",
              "Python",
            ],
            "Website": "https://alispit.tel",
            "slug": "ali-spittel",
          },
          "id": "recWhmTAXi2OjNN2R",
        }
      }
    />
  </div>
</Fragment>
`);
  });
});
