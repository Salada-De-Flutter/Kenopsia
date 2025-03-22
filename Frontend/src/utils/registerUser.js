import { v1 as uuidv1 } from 'uuid';

const registerUser = async (username, password, file) => {
    const uuid = uuidv1(); // Gera UUIDv1
    const formData = new FormData();
    formData.append('uuid', uuid);
    formData.append('username', username);
    formData.append('password', password);
    if (file) {
        formData.append('profileImage', file); // Adiciona a foto de perfil, se existir
    }

    try {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        // Armazena o UUID na localStorage se o cadastro for bem-sucedido
        if (data.status === 'success' && data.uuid) {
            localStorage.setItem('userUUID', data.uuid);
        }

        return data; // Retorna apenas os dados do backend (inclui o UUID)
    } catch (error) {
        throw new Error('Erro ao enviar dados para o backend: ' + error.message);
    }
};

export default registerUser;