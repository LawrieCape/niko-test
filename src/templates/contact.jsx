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
					<div className="form-field">

						{/* <!-- Label --> */}
						<label className="form-field__label" htmlFor="data__data_id">data__label</label>

						{/* <!-- Input --> */}
						<input className="form-field__input data__input_class" id="data__data_id" name="data__data_id" placeholder="data__placeholder" type="text" />

						{/* <!-- Error/success message --> */}
						<p className="form-field__error-message">data__error_message</p>

						{/* <!-- Valid icons --> */}
						<svg className="input__validation-icon input__validation-icon--valid">
							<use xlinkHref="#svg--form-valid-yes" />
						</svg>
						<svg className="input__validation-icon input__validation-icon--error">
							<use xlinkHref="#svg--form-valid-no" />
						</svg>

					</div>

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
