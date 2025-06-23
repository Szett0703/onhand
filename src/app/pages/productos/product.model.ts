export interface Product {
  upc:           string;              // 12-dígitos
  plu:           string;              // 5-dígitos
  sku:           string;              // código interno
  brand:         string;
  productName:   string;
  lastCost:      number;              // USD
  retailPrice:   number;              // USD
  ourPrice:      number;              // USD (evlp)
  aisle:         1 | 2 | 3 | 4 | 5 | 6;
  inventory:     number;
  lastSold:      string;              // YYYY-MM-DD
  sell7days:     number;
  sell30days:    number;
  sell90days:    number;
  sell180days:   number;
  receivedQty:   number;
  sold:          number;
  receivedDate:  string;              // YYYY-MM-DD
  vendor:        string;
}

/** 100 ítems de ejemplo — Grocery (1-25), Dairy (26-50), Frozen (51-75), Produce (76-100) */
export const PRODUCTS: Product[] = [
  /* ==================== GROCERY (Aisle 1) ==================== */
  {
    upc: '100000000001', plu: '41001', sku: 'GRC-0001',
    brand: 'Hunt’s', productName: 'Tomato Sauce 15 oz',
    lastCost: 0.68, retailPrice: 1.19, ourPrice: 0.99,
    aisle: 1, inventory: 125, lastSold: '2025-06-09',
    sell7days: 18, sell30days: 74, sell90days: 205, sell180days: 410,
    receivedQty: 600, sold: 475, receivedDate: '2025-05-02',
    vendor: 'Midwest Grocers Co.'
  },
  {
    upc: '100000000002', plu: '41002', sku: 'GRC-0002',
    brand: 'Barilla', productName: 'Spaghetti No.5 1 lb',
    lastCost: 1.05, retailPrice: 1.89, ourPrice: 1.59,
    aisle: 1, inventory: 90, lastSold: '2025-06-08',
    sell7days: 22, sell30days: 88, sell90days: 231, sell180days: 455,
    receivedQty: 650, sold: 560, receivedDate: '2025-04-28',
    vendor: 'Pasta World Importers'
  },
  {
    upc: '100000000003', plu: '41003', sku: 'GRC-0003',
    brand: 'Kellogg’s', productName: 'Corn Flakes 18 oz',
    lastCost: 2.10, retailPrice: 3.69, ourPrice: 3.29,
    aisle: 1, inventory: 60, lastSold: '2025-06-07',
    sell7days: 12, sell30days: 46, sell90days: 121, sell180days: 250,
    receivedQty: 350, sold: 290, receivedDate: '2025-05-10',
    vendor: 'Sunrise Cereal Dist.'
  },
  {
    upc: '100000000004', plu: '41004', sku: 'GRC-0004',
    brand: 'Jif', productName: 'Creamy Peanut Butter 16 oz',
    lastCost: 2.05, retailPrice: 3.59, ourPrice: 3.19,
    aisle: 1, inventory: 48, lastSold: '2025-06-09',
    sell7days: 10, sell30days: 38, sell90days: 97, sell180days: 202,
    receivedQty: 300, sold: 252, receivedDate: '2025-05-05',
    vendor: 'NutriFoods Ltd.'
  },
  {
    upc: '100000000005', plu: '41005', sku: 'GRC-0005',
    brand: 'Quaker', productName: 'Old Fashioned Oats 18 oz',
    lastCost: 2.25, retailPrice: 3.99, ourPrice: 3.59,
    aisle: 1, inventory: 72, lastSold: '2025-06-08',
    sell7days: 14, sell30days: 52, sell90days: 140, sell180days: 282,
    receivedQty: 400, sold: 328, receivedDate: '2025-05-12',
    vendor: 'Health Grain Wholesalers'
  },
  /* … (20 productos Grocery adicionales, id 6-25) … */

  /* ==================== DAIRY (Aisle 2) ==================== */
  {
    upc: '100000000026', plu: '42001', sku: 'DRY-0001',
    brand: 'Organic Valley', productName: 'Whole Milk Gallon',
    lastCost: 3.10, retailPrice: 5.29, ourPrice: 4.79,
    aisle: 2, inventory: 38, lastSold: '2025-06-09',
    sell7days: 25, sell30days: 102, sell90days: 270, sell180days: 545,
    receivedQty: 620, sold: 582, receivedDate: '2025-06-02',
    vendor: 'DairyBest Farms'
  },
  {
    upc: '100000000027', plu: '42002', sku: 'DRY-0002',
    brand: 'Land O’Lakes', productName: 'Salted Butter 1 lb',
    lastCost: 2.75, retailPrice: 4.49, ourPrice: 3.99,
    aisle: 2, inventory: 44, lastSold: '2025-06-08',
    sell7days: 19, sell30days: 76, sell90days: 198, sell180days: 402,
    receivedQty: 500, sold: 456, receivedDate: '2025-05-25',
    vendor: 'Creamy Valley Distribution'
  },
  /* … (23 productos Dairy adicionales, id 28-50) … */

  /* ==================== FROZEN (Aisle 3) ==================== */
  {
    upc: '100000000051', plu: '43001', sku: 'FRZ-0001',
    brand: 'DiGiorno', productName: 'Frozen Pizza Pepperoni 27 oz',
    lastCost: 4.50, retailPrice: 6.99, ourPrice: 6.49,
    aisle: 3, inventory: 56, lastSold: '2025-06-09',
    sell7days: 21, sell30days: 80, sell90days: 210, sell180days: 415,
    receivedQty: 600, sold: 544, receivedDate: '2025-05-15',
    vendor: 'Frozen Delights Corp.'
  },
  {
    upc: '860008199461', plu: '43002', sku: 'FRZ-0002',
    brand: 'SANG', productName: 'VIETNAMESE COFFE CINAMMON OATMILK LATTE',
    lastCost: 3.25, retailPrice: 5.49, ourPrice: 4.99,
    aisle: 3, inventory: 70, lastSold: '2025-06-08',
    sell7days: 24, sell30days: 95, sell90days: 250, sell180days: 500,
    receivedQty: 720, sold: 650, receivedDate: '2025-05-20',
    vendor: 'Frozen Delights Corp.'
  },
  /* … (23 productos Frozen adicionales, id 53-75) … */

  /* ==================== PRODUCE (Aisle 4) ==================== */
  {
    upc: '799210222219', plu: '44001', sku: 'PRD-0001',
    brand: 'Bionature', productName: 'Apricot Fruit Spread',
    lastCost: 0.48, retailPrice: 0.79, ourPrice: 0.69,
    aisle: 4, inventory: 120, lastSold: '2025-06-09',
    sell7days: 55, sell30days: 225, sell90days: 590, sell180days: 1180,
    receivedQty: 1500, sold: 1380, receivedDate: '2025-06-06',
    vendor: 'Tropical Produce Importers'
  },
  {
    upc: '075720481279', plu: '44002', sku: 'PRD-0002',
    brand: 'Poland Spring', productName: 'Water 16.9 Fl Oz',
    lastCost: 2.10, retailPrice: 3.49, ourPrice: 2.99,
    aisle: 4, inventory: 85, lastSold: '2025-06-08',
    sell7days: 32, sell30days: 120, sell90days: 310, sell180days: 620,
    receivedQty: 800, sold: 715, receivedDate: '2025-05-30',
    vendor: 'Sunshine Produce Co.'
  },
  /* … (23 productos Produce adicionales, id 78-100) … */
];
