import siteSettings from './schemas/siteSettings';
import portfolio from './schemas/portfolio';
import service from './schemas/service';
import faq from './schemas/faq';
import testimonial from './schemas/testimonial';
import blog from './schemas/blog';

export const schema = {
  types: [siteSettings, portfolio, service, faq, testimonial, blog],
};
