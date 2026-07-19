// Home Controller - จัดการ logic สำหรับหน้าแรก

const menuItems = [
  {
    id: 1,
    name: "แกงอ่อมไก่บ้าน",
    description: "แกงพื้นบ้าน หอมกลิ่นผักชีลาวและข้าวคั่ว รสชาติกลมกล่อม ซดน้ำร้อนๆ ชื่นใจ",
    price: 40,
    image: "/images/menu-1.jpg",
    category: "แกง",
    badge: "แนะนำ",
  },
  {
    id: 2,
    name: "น้ำพริกกะปิ ปลาทูทอด",
    description: "ชุดน้ำพริกกะปิรสจัดจ้าน เสิร์ฟพร้อมปลาทูแม่กลองทอด ชะอมชุบไข่ และผักต้ม",
    price: 60,
    image: "/images/menu-2.jpg",
    category: "จานหลัก",
    badge: "ขายดี",
  },
  {
    id: 3,
    name: "พะแนงหมู",
    description: "แกงพะแนงน้ำขลุกขลิก หมูนุ่มเคี่ยวกับกะทิจนแตกมัน หอมกลิ่นใบมะกรูดซอย",
    price: 45,
    image: "/images/menu-3.jpg",
    category: "แกง",
    badge: null,
  },
  {
    id: 4,
    name: "แกงขี้เหล็กหมูย่าง",
    description: "แกงกะทิใบขี้เหล็กรสชาติเข้มข้น ตัดความขมด้วยความมันของกะทิและหมูย่างหอมๆ",
    price: 50,
    image: "/images/menu-4.jpg",
    category: "แกง",
    badge: null,
  },
  {
    id: 5,
    name: "ต้มแซ่บกระดูกอ่อน",
    description: "ซุปใสรสชาติจัดจ้าน เปรี้ยว เผ็ด แซ่บถึงใจ กระดูกหมูตุ๋นจนเปื่อยละลายในปาก",
    price: 55,
    image: "/images/menu-5.jpg",
    category: "ซุป",
    badge: "แนะนำ",
  },
  {
    id: 6,
    name: "ไข่พะโล้หมูสามชั้น",
    description: "หมูสามชั้นและไข่ต้มเคี่ยวในน้ำพะโล้รสหวานเค็มกลมกล่อม หอมกลิ่นเครื่องเทศ",
    price: 40,
    image: "/images/menu-6.jpg",
    category: "ต้ม",
    badge: null,
  },
  {
    id: 7,
    name: "แกงหน่อไม้สดใส่ใบย่านาง",
    description: "แกงพื้นบ้านน้ำสีเขียวเข้มจากใบย่านาง ใส่หน่อไม้สด เห็ด และชะอม รสชาติแซ่บนัว",
    price: 45,
    image: "/images/menu-7.jpg",
    category: "แกง",
    badge: "ขายดี",
  },
  {
    id: 8,
    name: "ผัดเผ็ดปลาดุกทอดกรอบ",
    description: "ปลาดุกทอดกรอบผัดกับพริกแกงเผ็ดร้อน ใส่กระชาย พริกไทยอ่อน และใบมะกรูด",
    price: 60,
    image: "/images/menu-8.jpg",
    category: "จานหลัก",
    badge: null,
  },
  {
    id: 9,
    name: "แกงคั่วหอยขม",
    description: "หอยขมแกะเนื้อเคี่ยวในน้ำแกงกะทิรสจัดจ้าน หอมกลิ่นชะอมและใบชะพลู",
    price: 55,
    image: "/images/menu-9.jpg",
    category: "แกง",
    badge: null,
  },
  {
    id: 10,
    name: "หมูทอดกระเทียมพริกไทย",
    description: "หมูชิ้นหมักเครื่องเทศ ทอดจนเหลืองหอม โรยด้วยกระเทียมเจียวกรอบๆ ทานคู่กับข้าวสวย",
    price: 50,
    image: "/images/menu-10.jpg",
    category: "จานหลัก",
    badge: "ขายดี",
  }
];

// GET / - แสดงหน้าแรก
exports.getHomePage = (req, res) => {
  res.render("home", {
    title: "ร้านอาหารอาหารโปรดของฉัน",
    menuItems: menuItems,
  });
};

// GET /cart - แสดงหน้าตะกร้าสินค้า
exports.getCartPage = (req, res) => {
  res.render("cart", {
    title: "ตะกร้าสินค้า - ร้านอาหารอาหารโปรดของฉัน",
  });
};

// GET /about - แสดงหน้าเกี่ยวกับเรา
exports.getAboutPage = (req, res) => {
  res.render("about", {
    title: "เกี่ยวกับเรา - ร้านอาหารอาหารโปรดของฉัน",
  });
};