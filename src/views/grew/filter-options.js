export default [
  {
    name: '手机号',
    key: 'phone',
    type: 'input',
    remote: false,
    placeholder: '手机号',
    initialValue: '',
    suffixIcon: 'el-icon-search'
  },
  {
    name: '宠物名称',
    key: 'petName',
    type: 'input',
    remote: false,
    placeholder: '宠物名称',
    initialValue: '',
    suffixIcon: 'el-icon-search'
  },
  {
    name: '寄养时间',
    key: 'dateRange',
    type: 'dateRange',
    remote: false,
    clearable: true,
    startPlaceholder: '寄养时间',
    endPlaceholder: '寄养时间'
  },
  {
    name: '宠物类型',
    key: 'petType',
    type: 'select',
    placeholder: '宠物类型',
    remote: false,
    mode: 'single',
    clearable: true,
    options: [{ label: '猫咪', value: 1 }, { label: '狗狗', value: 2 }]
  }
]
