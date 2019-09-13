const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
   featured: {
      requered: true,
      type: Array,
      default: [],
   },
   siteInfo: {
      requered: true,
      type: Array,
      default: [],
   },
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
