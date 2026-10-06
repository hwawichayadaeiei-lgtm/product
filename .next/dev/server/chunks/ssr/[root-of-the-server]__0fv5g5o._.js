module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/products/[id]/delete/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "409f929defeb6743f91873bbee779ab943500536a9",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProductAction"],
    "6067da86aef72f4ecbd1777e696b72b60ba1258648",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProductAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$products$2f5b$id$5d2f$delete$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/products/[id]/delete/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/products/[id]/delete/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409f929defeb6743f91873bbee779ab943500536a9":{"name":"deleteProductAction"},"6067da86aef72f4ecbd1777e696b72b60ba1258648":{"name":"updateProductAction"}},"src/app/actions.ts",""] */ __turbopack_context__.s([
    "deleteProductAction",
    ()=>deleteProductAction,
    "updateProductAction",
    ()=>updateProductAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
// ใช้ auth เพื่อตรวจสอบว่าผู้ใช้ Login แล้วหรือยัง
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
// ใช้ redirect เพื่อกลับไปหน้าหลักหลังทำงานเสร็จ
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
/* =========================
   ตรวจสอบสิทธิ์ผู้ใช้
========================= */ // ตรวจสอบ session ก่อนทำงานแก้ไขหรือลบสินค้า
async function requireUser() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    // ถ้ายังไม่ได้ Login ให้กลับไปหน้าหลัก
    if (!session?.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    return session.user;
}
async function deleteProductAction(id) {
    // ตรวจสอบว่าผู้ใช้ Login แล้ว
    await requireUser();
    // ตรวจสอบก่อนว่าสินค้าเป็นสินค้าที่เก็บในระบบ Local หรือไม่
    const localProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])(id);
    if (localProduct) {
        // ถ้าเป็น Local ให้ลบออกจากรายการ
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"])(id);
        // ลบเสร็จแล้วกลับหน้าหลัก
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    // ถ้าไม่ใช่ Local ให้ส่ง DELETE ไปยัง DummyJSON
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
        cache: "no-store"
    });
    // ตรวจสอบว่า API ลบสำเร็จหรือไม่
    if (!response.ok) {
        throw new Error("ลบสินค้าไม่สำเร็จ");
    }
    /*
    DummyJSON ใช้สำหรับการทดลอง API
    การลบจะไม่ได้หายถาวรจาก API

    จึงเก็บ ID ของสินค้าที่ถูกลบไว้
    เพื่อไม่ให้แสดงกลับมาในหน้าเว็บ
  */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markProductAsDeleted"])(id);
    // ลบเสร็จแล้วกลับหน้าหลัก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function updateProductAction(id, formData) {
    // ตรวจสอบว่าผู้ใช้ Login แล้ว
    await requireUser();
    // รับชื่อสินค้าจาก Form
    const name = String(formData.get("name") ?? "").trim();
    // รับรายละเอียดสินค้า
    const description = String(formData.get("description") ?? "").trim();
    // รับราคาสินค้าและแปลงเป็นตัวเลข
    const price = Number(formData.get("price") ?? "");
    /* =========================
     ตรวจสอบข้อมูล
  ========================= */ if (!name) {
        throw new Error("กรุณากรอกชื่อสินค้า");
    }
    if (!description) {
        throw new Error("กรุณากรอกรายละเอียด");
    }
    // ตรวจสอบว่าราคาเป็นตัวเลขและไม่ติดลบ
    if (!Number.isFinite(price) || price < 0) {
        throw new Error("ราคาไม่ถูกต้อง");
    }
    /* =========================
     กรณีเป็นสินค้า Local
  ========================= */ const localProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProduct"])(id);
    if (localProduct) {
        // อัปเดตข้อมูลสินค้า Local
        localProduct.name = name;
        localProduct.title = name;
        localProduct.price = price;
        localProduct.description = description;
        // แก้ไขเสร็จแล้วกลับหน้าหลัก
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
    }
    /* =========================
     ดึงข้อมูลเดิมจาก DummyJSON
  ========================= */ // ดึงข้อมูลเดิมเพื่อรักษา
    // รูปภาพ stock และ category เอาไว้
    const oldResponse = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "no-store"
    });
    if (!oldResponse.ok) {
        throw new Error("ไม่พบสินค้านี้");
    }
    const oldProduct = await oldResponse.json();
    /* =========================
     ส่งข้อมูลแก้ไขไป DummyJSON
  ========================= */ const response = await fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        // ส่งเฉพาะข้อมูลที่ผู้ใช้แก้ไข
        body: JSON.stringify({
            title: name,
            price,
            description
        }),
        cache: "no-store"
    });
    // ตรวจสอบว่าแก้ไขสำเร็จหรือไม่
    if (!response.ok) {
        throw new Error("แก้ไขสินค้าไม่สำเร็จ");
    }
    /* =========================
     เก็บข้อมูลที่แก้ไข
  ========================= */ // เก็บข้อมูลที่แก้แล้วไว้ในระบบ
    // และใช้ข้อมูลเดิมของรูปภาพ stock category
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveUpdatedProduct"])({
        id: String(oldProduct.id),
        name,
        title: name,
        price,
        stock: oldProduct.stock,
        category: oldProduct.category,
        thumbnail: oldProduct.thumbnail,
        description,
        reviews: oldProduct.reviews ?? []
    });
    // แก้ไขเสร็จแล้วกลับหน้าหลัก
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    deleteProductAction,
    updateProductAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductAction, "409f929defeb6743f91873bbee779ab943500536a9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProductAction, "6067da86aef72f4ecbd1777e696b72b60ba1258648", null);
}),
"[project]/src/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "handlers",
    ()=>handlers,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
;
;
const { handlers, auth, signIn, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    providers: [
        // ใช้ Google OAuth สำหรับเข้าสู่ระบบ
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        })
    ],
    callbacks: {
        // ตรวจสอบสิทธิ์ก่อนเข้าแต่ละเส้นทาง
        authorized ({ auth, request }) {
            // ดึง URL ที่ผู้ใช้กำลังเปิด
            const pathname = request.nextUrl.pathname;
            // ตรวจว่าเป็นหน้าแก้ไขหรือลบสินค้าหรือไม่
            const isProductManagementPage = /^\/products\/[^/]+\/(edit|delete)$/.test(pathname);
            // ถ้าเป็นหน้าแก้ไขหรือลบ
            // ต้อง Login ก่อนจึงจะเข้าได้
            if (isProductManagementPage) {
                return Boolean(auth?.user);
            }
            // หน้าอื่น ๆ สามารถเข้าดูได้โดยไม่ต้อง Login
            return true;
        }
    }
});
}),
"[project]/src/lib/products.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "ProductDraftSchema",
    ()=>ProductDraftSchema,
    "SORT_FIELDS",
    ()=>SORT_FIELDS,
    "SearchQuerySchema",
    ()=>SearchQuerySchema,
    "addProduct",
    ()=>addProduct,
    "defaultQuery",
    ()=>defaultQuery,
    "deleteProduct",
    ()=>deleteProduct,
    "fetchProducts",
    ()=>fetchProducts,
    "getProduct",
    ()=>getProduct,
    "getProducts",
    ()=>getProducts,
    "getUpdatedProduct",
    ()=>getUpdatedProduct,
    "isProductDeleted",
    ()=>isProductDeleted,
    "markProductAsDeleted",
    ()=>markProductAsDeleted,
    "saveUpdatedProduct",
    ()=>saveUpdatedProduct,
    "updateProduct",
    ()=>updateProduct
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
const CATEGORIES = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories",
    "motorcycle",
    "skin-care",
    "smartphones",
    "sports-accessories",
    "sunglasses",
    "tablets",
    "tops",
    "vehicle",
    "womens-bags",
    "womens-dresses",
    "womens-jewellery",
    "womens-shoes",
    "womens-watches"
];
const SORT_FIELDS = [
    "title",
    "price",
    "stock"
];
const ProductDraftSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณากรอกชื่อสินค้า"),
    price: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, "ราคาต้องไม่ติดลบ"),
    stock: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0, "จำนวนสินค้าต้องไม่ติดลบ"),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณาเลือกหมวดหมู่"),
    thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url("กรุณากรอก URL รูปภาพที่ถูกต้อง"),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "กรุณากรอกรายละเอียด")
});
const SearchQuerySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    q: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    limit: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(100),
    sortBy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(SORT_FIELDS)
});
const defaultQuery = {
    q: "",
    limit: 10,
    sortBy: "title"
};
const products = globalThis.demoProducts ?? [];
const deletedProductIds = globalThis.deletedProductIds ?? [];
const updatedProducts = globalThis.updatedProducts ?? [];
globalThis.demoProducts = products;
globalThis.deletedProductIds = deletedProductIds;
globalThis.updatedProducts = updatedProducts;
function getProducts() {
    return products;
}
function getProduct(id) {
    return products.find((product)=>product.id === id);
}
function addProduct(product) {
    const newProduct = {
        ...product,
        id: `p${Date.now()}`,
        name: product.title,
        reviews: []
    };
    products.push(newProduct);
    return newProduct;
}
function updateProduct(id, values) {
    const product = getProduct(id);
    if (!product) {
        throw new Error("Product not found");
    }
    product.name = values.name;
    product.title = values.name;
    product.price = values.price;
    product.description = values.description;
}
function deleteProduct(id) {
    const index = products.findIndex((product)=>product.id === id);
    if (index === -1) {
        throw new Error("Product not found");
    }
    products.splice(index, 1);
}
function markProductAsDeleted(id) {
    if (!deletedProductIds.includes(id)) {
        deletedProductIds.push(id);
    }
}
function isProductDeleted(id) {
    return deletedProductIds.includes(id);
}
function saveUpdatedProduct(product) {
    const index = updatedProducts.findIndex((item)=>item.id === product.id);
    if (index === -1) {
        updatedProducts.push(product);
    } else {
        updatedProducts[index] = product;
    }
}
function getUpdatedProduct(id) {
    return updatedProducts.find((product)=>product.id === id);
}
async function fetchProducts(query) {
    const params = new URLSearchParams();
    params.set("limit", String(query.limit));
    params.set("sortBy", query.sortBy);
    params.set("sortOrder", "asc");
    let url = "https://dummyjson.com/products";
    const keyword = query.q.trim();
    if (keyword) {
        params.set("q", keyword);
        url = "https://dummyjson.com/products/search";
    }
    const response = await fetch(`${url}?${params.toString()}`, {
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error("เรียกข้อมูลสินค้าไม่สำเร็จ");
    }
    const data = await response.json();
    const apiProducts = data.products.filter((product)=>!isProductDeleted(String(product.id))).map((product)=>{
        const id = String(product.id);
        const updated = getUpdatedProduct(id);
        if (updated) {
            return updated;
        }
        return {
            id,
            name: product.title,
            title: product.title,
            price: product.price,
            stock: product.stock,
            category: product.category,
            thumbnail: product.thumbnail,
            description: product.description,
            reviews: product.reviews ?? []
        };
    });
    return {
        products: apiProducts,
        total: data.total
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fv5g5o._.js.map