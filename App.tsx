import React from 'react';
import { ProFormSelect } from '@ant-design/pro-form';

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
  },
};

export default () => (
  <ProFormSelect
    name="select2"
    label="Select"
    params={{}}
    valueType="select"
    valueEnum={valueEnum}
    placeholder="Please select a country"
  />
);