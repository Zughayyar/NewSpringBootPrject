import {Flex, Spin, Table} from "antd";
import useStyle from "../styles/CustomTable.jsx";
import {useEffect, useState} from "react";
import myStyles from '../styles/syles.module.css'


const UserTable = () => {
    const { styles } = useStyle();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/users", {
                method: "GET",
                credentials: "include"
            });

            // Check if response is OK (status 200)
            if (!response.ok) {
                setError(`Could not fetch users for ${response.status}`);
                return;
            }

            const data = await response.json();

            // Check if data structure is correct
            if (!data || !Array.isArray(data.users)) {
                setError("Invalid API response format");
                return;
            }

            console.log(data);
            setUsers(data.users);
            setUser(data.sessionName)
            setLoading(false);
        } catch (error) {
            setError(error.message)
            setLoading(false);
        }


    }

    useEffect(() => {
        fetchUsers().then();
    },[])





    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
            width: 100,
            align: 'center',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
            width: 100,
            align: 'center',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 100,
            align: 'center',
        }
    ]

    return (
        <div className={myStyles.tableContainer}>
            {loading ? (
                <Flex align="center" gap="middle">
                    <Spin size="large" />
                </Flex>
            ) : (
                <>
                    <h3>Hi, {user}, users table:</h3>
                    {error && <p style={{ color: "red" }}>Error: {error}</p>}

                    {!error && (
                        <Table
                            bordered
                            className={styles.customTable}
                            columns={columns}
                            dataSource={users}
                            rowKey="email"
                            scroll={{
                                x: 'max-content',
                            }}
                            pagination={false}
                        />
                    )}

                </>
            )}
        </div>


    )
}

export default UserTable