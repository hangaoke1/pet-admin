import dayjs from 'dayjs'
import { getLodop } from './LodopFuncs'

export const printCasherOrder = (storeInfo, orderInfo) => {
  // 门店信息
  const orderId = orderInfo.orderId
  const date = dayjs().format('YYYY-MM-DD HH:mm:ss');
  // 商品信息
  const skuStr = orderInfo.skuJsonString
    .map((sku) => {
      return `
            <div style="display: flex;margin-top: 2mm;">
              <div style="width: 30mm;font-size: 9pt;">${sku.name}</div>
              <div style="width: 21mm;text-align:center;font-size: 9pt;">${sku.quantity}</div>
              <div style="width: 21mm;text-align:center;font-size: 9pt;">${sku.price.toFixed(2)}</div>
            </div>`;
    })
    .join('\n');
  const LODOP = getLodop();
  LODOP.SET_PRINT_STYLE('FontSize', 8);
  LODOP.ADD_PRINT_HTM(
    0,
    0,
    '100%',
    '100%',
    `<div>
      <h1  style="font-size: 16pt;text-align: center">${storeInfo.storeName}</h1>
      <div style="margin-bottom: 2mm;font-size: 10pt;">订单号：${orderId}</div>
      <div style="font-size: 10pt;">收银员：${storeInfo.storeName}</div>
      <div style="padding: 2mm 0;font-size: 10pt;">= = = = = = = = = = = = = = = = = = = = = = =</div>
      <div style="display: flex">
        <div style="width: 30mm;font-size: 9pt;">商品名称</div>
        <div style="width: 21mm;text-align:center;font-size: 9pt;">数量</div>
        <div style="width: 21mm;text-align:center;font-size: 9pt;">单价</div>
      </div>
      ${skuStr}
      <div style="padding: 2mm 0;font-size: 10pt;">= = = = = = = = = = = = = = = = = = = = = = =</div>
      <div style="margin-bottom: 2mm;font-size: 10pt;">收款金额：${orderInfo.paidFee.toFixed(2)}元</div>
      <div style="margin-bottom: 2mm;font-size: 10pt;">店铺地址：${storeInfo.address || '浙江省杭州市滨江区滨盛路1893号'}</div>
      <div style="margin-bottom: 2mm;font-size: 10pt;">联系方式：${storeInfo.mobile}</div>
      <div style="margin-bottom: 2mm;font-size: 10pt;">下单时间：${date}</div>
      <img border="0" src="${storeInfo.qrCode}" style="width: 40mm;height:auto;" /> 
    </div>`
  );
  // LODOP.ADD_PRINT_BARCODE(200, 20, 100, 100, 'QRCode', '1234567890版本7的最大值是122个字符123123');
  LODOP.SET_PRINT_PAGESIZE(3, 720, 45, '');
  LODOP.PRINT();
};

// 打印在线订单
export const printOnlineOrder = () => {}
