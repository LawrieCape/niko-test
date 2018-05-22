const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							templateKey
						}
					}
				}
			}
		}
	`).then((result) => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()));
			return Promise.reject(result.errors);
		}

		return result.data.allMarkdownRemark.edges.forEach((edge) => {
			const { id } = edge.node;
			console.log('XXX: ', edge.node.frontmatter);
			createPage({
				path: edge.node.fields.slug,
				component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`),
				// additional data can be passed via context
				context: {
					id,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;

	if (node.internal.type === 'MarkdownRemark') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: 'slug',
			node,
			value,
		});
	}
};

// Another way to get around the "window/document is not defined build issue"
// exports.modifyWebpackConfig = ({ config, stage }) => {
// 	if (stage === 'build-html') {
// 		config.loader('null', {
// 			test: /sticky-js/,
// 			loader: 'null-loader',
// 		});
// 	}
// };
