import React from 'react';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// export default class ContactPageTemplate extends React.Component {
// 	render() {
const ContactPageTemplate = (props) => {
	const { data } = props;
	const { edges: posts } = data.allMarkdownRemark;

	return (
		<div className="container-fluid">
			<article className="">
				<Helmet title="Contact us!" />

				<header>
					<h1 className="">Contact us!</h1>
				</header>

				<form>
					<p>Form to go here...</p>
					<input type="text" placeholder="test" />
					<button>Submit</button>
				</form>
			</article>
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
