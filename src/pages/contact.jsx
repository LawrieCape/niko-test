import React from 'react';

// export default class ContactPageTemplate extends React.Component {
// 	render() {
const ContactPageTemplate = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div>
			<h1 className="has-text-weight-bold is-size-2">Contact us!</h1>

			<p>Form to go here...</p>
		</div>
	);
};

export default ContactPageTemplate;

export const contactPageQuery = graphql`
	query ContactPage {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 400)
					id
					fields {
						slug
					}
					frontmatter {
						title
						templateKey
						date(formatString: "MMMM DD, YYYY")
					}
				}
			}
		}
	}
`;
