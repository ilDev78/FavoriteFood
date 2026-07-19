const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "กรุณากรอกชื่อเมนู"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "กรุณากรอกรายละเอียดเมนู"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "กรุณากรอกราคา"],
      min: [0, "ราคาต้องมากกว่า 0"],
    },
    image: {
      type: String,
      default: "/images/menu-1.jpg",
    },
    category: {
      type: String,
      required: [true, "กรุณาเลือกหมวดหมู่"],
      enum: {
        values: ["จานหลัก", "แกง", "ซุป", "ต้ม", "ของหวาน", "เครื่องดื่ม"],
        message: "หมวดหมู่ {VALUE} ไม่ถูกต้อง",
      },
    },
    badge: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MenuItem", menuItemSchema);
