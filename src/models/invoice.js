const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
  discountType: {
    type: String,
    enum: ['percentage', 'absolute'],
    default: 'percentage',
  },
  discountValue: {
    type: Number,
  }
});

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: DiscountSchema,
});

const InvoiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  invoiceNumber: {
    type: Number,
    required: true,
  },
  invoiceDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  customer: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  items: [ItemSchema],
  discount: DiscountSchema,
  vat: {
    type: Number,
    default: 0,
    required: false,
  },
  currency: {
    type: String,
    required: true,
    default: 'EUR',
  },
  status: {
    type: String,
    enum: ['draft', 'sent', 'paid'],
    default: 'draft',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
