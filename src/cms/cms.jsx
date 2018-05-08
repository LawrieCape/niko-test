import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import ServicePagePreview from './preview-templates/ServicePagePreview';
// import ProductLandingPagePreview from './preview-templates/ProductLandingPagePreview';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('services', ServicePagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
// CMS.registerPreviewTemplate('product-landing', ProductLandingPagePreview);
