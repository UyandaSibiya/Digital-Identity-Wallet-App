const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  hash: String,
  expiryDate: Date,
  qrCodeData: String
});

module.exports = mongoose.model('Document', DocumentSchema);
