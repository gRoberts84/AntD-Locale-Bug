import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LocaleProvider, Table } from 'antd';

import './index.css';

import enGB from 'antd/lib/locale-provider/en_GB';

const dataSource: any = [];

const columns: any = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];

ReactDOM.render(
    <LocaleProvider locale={enGB}>
        <Table dataSource={dataSource} columns={columns} />
    </LocaleProvider>,
    document.getElementById('root') as HTMLElement
);