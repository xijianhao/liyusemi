import product1_1 from '@src/static/product1_1.jpg';
import product1_2 from '@src/static/product1_2.jpg';
import product2_1 from '@src/static/product2_1.png';
import product2_2 from '@src/static/product2_2.jpg';
export const menuConfig = [
  { label: '深紫外LED灯珠', value: 1 },
  { label: '深紫外LED模组', value: 2 },
]

export const menuDataMap = {
  1: [
    {
      url:product1_1,
      name: '深紫色灯珠',
      title: 'LY-DUV-TB-L/S/M',
      content: [
        '主波长：',
        '270 - 280 纳米',
        '295 - 315 纳米',
        '标准输出光功率 (100 毫安)：15 毫瓦',
        '最大输出光功率 (350 毫安)： 50 毫瓦',
        '工作电压：5.5-6.2 伏',
        '封装尺寸：3.5 x 3.5 毫米',
        '连续工作寿命：10,000+ 小时',
      ],
    },
    {
      url:product1_2,
      name: '灯珠',
      title: 'LY-DUV-TB-L/S/M',
      content:[
        '主波长：',
        '270 - 280 纳米',
        '295 - 315 纳米',
        '标准输出光功率 (100 毫安)：40 毫瓦',
        '最大输出光功率 (350 毫安)： 100 毫瓦',
        '工作电压：5.5-6.2 伏',
        '封装尺寸：3.5 x 3.5 毫米',
        '连续工作寿命：10,000+ 小时',
      ],
    }
  ],
  2: [
    {
      url:product2_1,
      name: '深紫色灯珠',
    },
    {
      url:product2_2,
      name: '深紫色灯珠',
    },
  ]
}