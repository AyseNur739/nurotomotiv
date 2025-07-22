//işverenin giriş yaptığı sayfa 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const correctPassword = "123"; // Şifreyi buradan değiştirebilirsin

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            sessionStorage.setItem('isAdmin', 'true');
            navigate('/admin/arizalar');
        } else {
            setError("Şifre yanlış, tekrar deneyin.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>İşveren Girişi</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                    autoFocus
                />
                <button type="submit" style={styles.button}>Giriş Yap</button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}

const styles = {
    container: {
        maxWidth: 400,
        margin: '100px auto',
        padding: 20,
        border: '1px solid #ccc',
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fafafa',
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    title: {
        marginBottom: 20,
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
        borderRadius: 4,
        border: '1px solid #ccc',
        outline: 'none',
    },
    button: {
        padding: 12,
        fontSize: 16,
        borderRadius: 4,
        border: 'none',
        backgroundColor: '#3e3d3c',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    error: {
        marginTop: 10,
        color: 'red',
        fontWeight: 'bold',
    },
};

export default AdminLogin;
