import {Breadcrumb, Button } from 'antd';
function App() {
    return (
        <div >
            <h1>Vite + React</h1>
            <Button type="primary">Primary Button</Button>
            <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default App
