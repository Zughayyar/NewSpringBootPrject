import {Breadcrumb, Layout} from 'antd';
const {  Content } = Layout;
import myStyles from '../styles/syles.module.css'


const HomePage = () => {

    return (
        <div className={myStyles.homeContainer}>
            <Layout className={myStyles.layoutContainer}>
                <Content
                    style={{
                        padding: '0 48px',
                    }}
                >
                    <Breadcrumb
                        items={[
                            {title: 'Home', href: '/'},
                            {title: 'About'},
                        ]}
                    />

                    <Content className={myStyles.contentContainer}>
                        <h1>Hello World!</h1>
                    </Content>
                </Content>
            </Layout>
        </div>
    )
}

export default HomePage;