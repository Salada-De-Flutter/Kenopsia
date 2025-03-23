// Interface para o resultado do registro
interface RegisterResult {
  status: 'success' | 'error';
  uuid?: string;
  message?: string;
}

// Função para registrar um novo usuário
export const registerUser = async (
  username: string,
  password: string,
  profileImage: File | null
): Promise<RegisterResult> => {
  // TODO: Implementar integração com backend
  // Simulação de registro bem-sucedido
  return {
    status: 'success',
    uuid: 'user-123',
  };
};