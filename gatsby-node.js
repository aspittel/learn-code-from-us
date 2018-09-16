const path = require('path');
const _ = require('lodash');
const generateBabelConfig = require("gatsby/dist/utils/babel-config");

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === 'MarkdownRemark') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.slug)}`;
    }
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('src/templates/project.jsx');
    resolve(
      graphql(`
        {
          allAirtable {
            edges {
              node {
                slug
                Tags
                Blog
                YouTube
                Podcast
                Name
                Website
                About
                Newsletter
                Image {
                  url
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        console.log(result.data.edges)
        result.data.allAirtable.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: projectPage,
            context: {
              slug: edge.node.slug,
            },
          });
        });
      })
    );
  });
};


exports.modifyWebpackConfig = ({ config, stage }) => {
  // https://www.gatsbyjs.org/docs/add-custom-webpack-config/#modifying-the-babel-loader
  const program = {
    directory: __dirname,
    browserslist: ["> 1%", "last 2 versions", "IE >= 9"]
  };

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader("js").loader("js", {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          // whitelist specific es6 modules
          !/node_modules\/(chalk|react-icons)/.test(modulePath)
        );
      },
      loader: "babel",
      query: babelConfig
    });
  });
}
