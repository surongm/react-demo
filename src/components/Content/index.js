import React, { Component } from 'react'
import {
    Button,
    Spin,
    Badge,
    Pagination
} from 'antd'

export default class Content extends Component {
    render() {
        return (
            <div>
                Content
                <Button loading type="primary">测试按钮</Button>
                <Spin>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore mollitia, quibusdam illo quasi fuga, atque velit laboriosam alias expedita reprehenderit et dolores porro aut itaque praesentium vel minus. Hic.</div>
                </Spin>
                <Pagination
                    showQuickJumper
                    showSizeChanger
                    defaultCurrent={2}
                    total={500}
                />
                <Badge
                    count={10}
                    overflowCount={9}
                    showZero
                >
                    <span>Lorem</span>
                </Badge>
            </div>
        )
    }
}
