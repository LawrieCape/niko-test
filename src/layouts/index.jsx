import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './all.scss';

const TemplateWrapper = ({ children, data }) => {
	const pages = data.allMarkdownRemark.edges;

	return (
		<div className="page">
			<Helmet title="Home | Niko">
				<html lang="en-GB" />
				<link href="https://fonts.googleapis.com/css?family=Raleway:400,500,600,700" rel="stylesheet" />
			</Helmet>

			<div className="page__body">
				<SiteHeader posts={pages} />

				<main>
					{children()}
				</main>
			</div>

			<div className="page__footer">
				<SiteFooter />
			</div>

		</div>
	);
};

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper;

export const templatePageQuery = graphql`
	query TemplatePage {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "product-landing" } }},
			sort: { order: ASC, fields: [frontmatter___order] }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						navTitle
						templateKey
						order
					}
				}
			}
		}
	}
`;

// TODO: learn graphql lol \/
// Run the query to see all files in /src/.
// {
//   allFile {
//     edges {
//       node {
//         id
//       }
//     }
//   }
// }


// query TemplatePage {
// 	allMarkdownRemark(
// 		filter: { frontmatter: { templateKey: { eq: "product-landing" } }},
// 		sort: { order: ASC, fields: [frontmatter___order] }
// 	) {
// 		edges {
// 			node {
// 				id
// 				fields {
// 					slug
// 				}
// 				frontmatter {
// 					title
// 					templateKey
// 					order
// 				}
// 			}
// 		}
// 	}
// }
//
// query ProductPageByID {
// 	markdownRemark(frontmatter: {title: {eq: "NikoTrack"}}) {
// 		id
// 		html
// 		frontmatter {
// 			title
//     templateKey
//     order
// 			customSections {
// 				title
// 				body
// 				images {
// 					imageUrl
// 					imageAlt
// 				}
// 				pdfs {
// 					title
// 					pdfUrl
// 					pdfThumb
// 				}
// 				videos {
// 					youTubeId
// 					vidDescription
// 				}
// 				products {
// 					title
// 					imageUrl
// 				}
// 			}
// 		}
// 	}
// }
