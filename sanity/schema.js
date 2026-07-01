import siteSettings from './schemas/siteSettings';
import portfolio from './schemas/portfolio';
import service from './schemas/service';
import faq from './schemas/faq';
import testimonial from './schemas/testimonial';
import blog from './schemas/blog';
import about from './schemas/about';
import team from './schemas/team';

export const schema = {
  types: [siteSettings, about, team, portfolio, service, faq, testimonial, blog],
};
