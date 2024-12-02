import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
//import { RootState } from '../../core/store';
//import { updateUser } from '../../core/store/slices/userSlice';
//import { UserDTO } from '../../core/api/API';
import { useAppDispatch, useAppSelector } from '../../core/store/hooks';
import './UserAccountForm.css';

export const UserAccountForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    //const user = useAppSelector((state: RootState) => state.user);

    // useEffect(() => {
    //     setUsername(user.username);
    //     setLogin(user.login);
    // }, [user]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== repeatPassword) {
            setError('Пароли не совпадают');
            return;
        }

        // const userDTO: UserDTO = {
        //     login: login,
        //     password: password,
        //     username: username,
        // };

        // try {
        //     const resultAction = await dispatch(updateUser(userDTO));

        //     if (updateUser.fulfilled.match(resultAction)) {
        //         navigate('/login');
        //     } else {
        //         setError('Не удалось обновить данные. Попробуйте еще раз.');
        //     }
        // } catch (err) {
        //     setError('Произошла ошибка при обновлении данных. Попробуйте еще раз.');
        //     console.error(err);
        // }
    };

    return (
        <div className="account-form-container">
            <h1 className="account-form-title">Изменение данных аккаунта</h1>
            <Form onSubmit={handleSubmit} className="account-form">
                <Form.Floating>
                    <Form.Control
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="username">Имя</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="login"
                        type="email"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                    />
                    <label htmlFor="login">Логин</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Пароль</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="repeatPassword"
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label htmlFor="repeatPassword">Повторите пароль</label>
                </Form.Floating>

                {error && <div className="alert-danger">{error}</div>}

                <button type="submit" className="account-form-button">
                    Сохранить
                </button>
            </Form>
        </div>
    );
};
