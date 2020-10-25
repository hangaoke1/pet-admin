export default [
  {
    name: '手机号',
    key: 'phone',
    type: 'input',
    remote: false,
    placeholder: '手机号',
    initialValue: ''
  },
  {
    name: '宠物名称',
    key: 'petName',
    type: 'input',
    remote: false,
    placeholder: '宠物名称',
    initialValue: ''
  },
  {
    name: '寄养时间',
    key: 'dateRange',
    type: 'dateRange',
    placeholder: '寄养时间',
    remote: false,
    clearable: true
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
  },
  {
    name: '状态',
    key: 'petState',
    type: 'select',
    placeholder: '状态',
    remote: false,
    mode: 'single',
    clearable: true,
    options: [{ label: '待确认', value: 0 }, { label: '寄养中', value: 1 }, { label: '已完成', value: 2 }]
  }
]
