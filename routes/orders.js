const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const dotenv = require("dotenv");
dotenv.config();

// POST new order
router.post("/", async (req, res) => {
  try {
    const { products, customerName, phone, address } = req.body;
    const order = new Order({ products, customerName, phone, address });
    await order.save();

    // WhatsApp message URL
    const message = `New Order from ${customerName}%0APhone: ${phone}%0AAddress: ${address}%0AProducts:%0A${products.map(p=>`${p.name} - Qty: ${p.quantity}`).join('%0A')}`;
    const whatsappUrl = `https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${message}`;

    res.json({ success: true, whatsappUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
