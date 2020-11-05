// TODO: 优惠设置
export const fmtSku = (sku, productType) => {
  // 商品
  if (productType === 0) {
    return {
      productType,
      id: sku.id,
      skuId: sku.id,
      name: sku.skuName,
      imgUrl: sku.skuImgUrl,
      price: sku.price,
      memberPrice: sku.price,
      quantity: 1,
      percent: 100,
      total: sku.price * 1
    };
  }
  // 服务
  if (productType === 1) {
    return {
      productType,
      id: sku.id,
      skuId: '',
      name: sku.name + '-' + sku.mealName + '-' + sku.category,
      imgUrl: '',
      price: sku.originalPrice,
      memberPrice: sku.memberPrice || sku.originalPrice,
      quantity: 1,
      percent: sku.memberPrice ? +(sku.memberPrice / sku.originalPrice * 100).toFixed(2) : 100,
      total: sku.memberPrice || sku.originalPrice
    };
  }
};
