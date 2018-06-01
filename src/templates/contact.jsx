import React from 'react';
// import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Helmet from 'react-helmet';

// export default class ContactPageTemplate extends React.Component {
// 	render() {
const ContactPageTemplate = (props) => {
	const { data } = props;
	const { title } = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;

	return (
		<div className="container-fluid">
			<article className="page-body">
				<Helmet title="Contact | Niko" />

				<header className="page-header">
					<h1 className="">{title || 'Contact'}</h1>
					<ReactMarkdown className="rich-text" source={html} />
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
	query ContactPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				title
			}
		}
	}
`;
