import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import myStyles from '../styles/syles.module.css'


const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className={myStyles.notFoundContainer}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={() => navigate("/")}>
                        Back to Home
                    </Button>
                }
            />
        </div>

    );
};

export default NotFound;