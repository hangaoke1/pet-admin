export default [
  {
    name: '门店名称',
    key: 'storeName',
    type: 'input',
    remote: false,
    placeholder: '请输入门店名称',
    initialValue: '',
    suffixIcon: 'el-icon-search'
  },
  {
    name: '营业状态',
    key: 'storeState',
    type: 'select',
    placeholder: '请选择营业状态',
    remote: false,
    mode: 'single',
    clearable: true,
    options: [{ label: '营业中', value: 0 }, { label: '休息中', value: 1 }]
  }
]
