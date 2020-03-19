/* eslint-disable */
/**
 * 菜鸟电子面单
 */
import { getUUID, getRequestObject } from './utils'

export const STATUS = {
  status: 'init' // init、connect、close
}

export let socket = null

export default class IMSERVICE {
  constructor (options) {
    STATUS.status = 'init'
  }

  static getInstance (options) {
    if (!this.instance) {
      this.instance = new IMSERVICE(options)
    }
    return this.instance
  }

  getSocket () {
    return new Promise((resolve) => {
      if (STATUS.status == 'connect') {
        resolve(nimInstance)
        return
      }
      socket = new WebSocket('ws://localhost:13528')
      socket.onopen = function (event) {
        STATUS.status = 'connect'
        socket.onmessage = function (event) {
          const printResult = JSON.parse(event.data);
          console.log('接收打印消息：', printResult);
        }
        socket.onclose = function (event) {
          STATUS.status = 'close'
          console.log('菜鸟打印链接中断：', event)
        }
      }
      resolve(socket)
    })
  }

  // {
  //   title: '小黄兜宠物生活馆',
  //   orderId: '',
  //   productList: [
  //     { name: '', price: '', quantity: '' }
  //   ],
  //   quantityTotal: '',
  //   priceTotal: '',
  //   contact: { name: '', phone: '', address: '' },
  //   time: ''
  // }
  print (info) {
    this.getSocket().then((socket) => {
      let request = getRequestObject('print')
      request.task = new Object()
      request.task.taskID = getUUID(8, 10) + ':' + info.orderId
      request.task.preview = false
      request.task.printer = ''
      request.task.documents = [
        {
          documentID: info.orderId,
          contents: [
            {
              data: info,
              templateURL: 'http://cloudprint.cainiao.com/template/standard/278250/1'
            }
          ]
        }
      ]
      socket.send(JSON.stringify(request))
    })
  }
}
