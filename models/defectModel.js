var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var defectModel = new Schema({
    defect_id: { type: String },
    product_family: { type: String },
    version: { type: String },
    customer: { type: String },
    author_cec_id: { type: String },
    author_name: { type: String },
    created: { type: Date},
    modified: { type: Date },
    comments: { type: String },
}, {
        collection: 'defects'
    });

module.exports = mongoose.model('defectModel', defectModel);    