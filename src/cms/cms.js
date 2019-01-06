import CMS from 'netlify-cms';

import TechPostPreview from './preview-templates/TechPostPreview';
import ChallengePostPreview from './preview-templates/ChallengePostPreview';
import PhilosophyPostPreview from './preview-templates/PhilosophyPostPreview';

CMS.registerPreviewTemplate('tech', TechPostPreview);
CMS.registerPreviewTemplate('challenge', ChallengePostPreview);
CMS.registerPreviewTemplate('philosophy', PhilosophyPostPreview);
