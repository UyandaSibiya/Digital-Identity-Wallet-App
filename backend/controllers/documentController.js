const Document = require('../models/Document');
const crypto = require('crypto');
const fs = require('fs');

exports.uploadDoc = async (req, res) => {
  const file = req.file;
  const userId = req.user.id;

  if (!file) return res.status(400).json({ error: 'No file uploaded' });

  const hash = crypto.createHash('sha256').update(fs.readFileSync(file.path)).digest('hex');

  const newDoc = await Document.create({
    filename: file.originalname,
    userId,
    hash,
    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days later
    qrCodeData: hash
  });

  res.status(201).json({ message: 'Document uploaded', document: newDoc });
};
