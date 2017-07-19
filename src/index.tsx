import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { LocaleProvider, TreeSelect } from 'antd';

const TreeNode = TreeSelect.TreeNode;

import './index.css';

import enGB from 'antd/lib/locale-provider/en_GB';

ReactDOM.render(
    <LocaleProvider locale={enGB}>
        <TreeSelect>
            <TreeNode title="Test Node" />
        </TreeSelect>
    </LocaleProvider>,
    document.getElementById('root') as HTMLElement
);