import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #1C1E26, #2D2F3A)',
        padding: '1rem', // 16px base
        '@media (min-width: 640px)': {
          padding: '1.5rem', // 24px para tablets
        },
        '@media (min-width: 1024px)': {
          padding: '2rem', // 32px para desktop
        },
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '448px', // max-w-md
          '@media (min-width: 640px)': {
            maxWidth: '640px', // md:max-w-lg
          },
          '@media (min-width: 1024px)': {
            maxWidth: '896px', // lg:max-w-xl
          },
        }}
      >
        {/* Logo e Título */}
        <div
          style={{
            position: 'relative',
            cursor: 'pointer',
            marginBottom: '1rem', // 16px
            '@media (min-width: 640px)': {
              marginBottom: '1.5rem', // 24px
            },
          }}
        >
          <FaCode
            style={{
              color: '#FF6347',
              fontSize: '1.875rem', // 30px (text-3xl)
              transition: 'transform 0.5s',
              '@media (min-width: 640px)': {
                fontSize: '2.25rem', // 36px (md:text-4xl)
              },
              '@media (min-width: 1024px)': {
                fontSize: '3rem', // 48px (lg:text-5xl)
              },
            }}
            className="group-hover:rotate-180"
          />
          <div
            style={{
              position: 'absolute',
              top: '-0.5rem',
              left: '-0.5rem',
              right: '-0.5rem',
              bottom: '-0.5rem',
              backgroundColor: '#FF6347',
              opacity: 0,
              borderRadius: '9999px',
              filter: 'blur(8px)',
              transition: 'opacity 0.5s',
            }}
            className="group-hover:opacity-20"
          />
        </div>

        <h1
          style={{
            color: 'white',
            fontSize: '1.25rem', // 20px (text-xl)
            fontWeight: 'bold',
            letterSpacing: '0.05em',
            marginBottom: '0.5rem', // 8px
            position: 'relative',
            animation: 'fade-in 0.5s ease-out',
            '@media (min-width: 640px)': {
              fontSize: '1.5rem', // 24px (md:text-2xl)
              marginBottom: '1rem', // 16px
            },
            '@media (min-width: 1024px)': {
              fontSize: '1.875rem', // 30px (lg:text-3xl)
            },
          }}
        >
          KENOPSIA
          <span
            style={{
              position: 'absolute',
              top: '-0.25rem',
              left: '-0.25rem',
              right: '-0.25rem',
              bottom: '-0.25rem',
              backgroundColor: '#FF6347',
              opacity: 0,
              borderRadius: '0.5rem',
              filter: 'blur(4px)',
              transition: 'opacity 0.3s',
            }}
            className="hover:opacity-20"
          />
        </h1>

        <p
          style={{
            color: 'white',
            letterSpacing: '0.05em',
            fontSize: '0.75rem', // 12px (text-xs)
            marginBottom: '1.5rem', // 24px
            animation: 'slide-in 0.5s ease-out',
            '@media (min-width: 640px)': {
              fontSize: '0.875rem', // 14px (md:text-sm)
              marginBottom: '2rem', // 32px
            },
            '@media (min-width: 1024px)': {
              fontSize: '1rem', // 16px (lg:text-base)
            },
          }}
        >
          R E M E M B E R - T H E - P A S T
        </p>

        {/* Descrição */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem', // 24px
            animation: 'fade-in-up 0.5s ease-out',
            '@media (min-width: 640px)': {
              marginBottom: '2rem', // 32px
            },
          }}
        >
          <p
            style={{
              color: 'white',
              fontSize: '0.875rem', // 14px (text-sm)
              fontWeight: '300',
              '@media (min-width: 640px)': {
                fontSize: '1rem', // 16px (md:text-base)
              },
              '@media (min-width: 1024px)': {
                fontSize: '1.125rem', // 18px (lg:text-lg)
              },
            }}
          >
            Uma recriação e homenagem ao Omlet Arcade
          </p>
        </div>

        {/* Botão Criar Conta */}
        <button
          onClick={() => navigate('/register')}
          style={{
            background: 'linear-gradient(to right, #FF6347, #FF8367)',
            color: 'white',
            padding: '0.5rem 1.5rem', // py-2 px-6
            borderRadius: '0.5rem',
            fontSize: '0.875rem', // 14px (text-sm)
            fontWeight: '500',
            transition: 'all 0.3s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            width: '100%',
            marginBottom: '1rem', // 16px
            '@media (min-width: 640px)': {
              padding: '0.75rem 2rem', // md:py-3 md:px-8
              fontSize: '1rem', // 16px (md:text-base)
            },
            '@media (min-width: 1024px)': {
              fontSize: '1.125rem', // 18px (lg:text-lg)
            },
          }}
          className="hover:bg-[#FF6347] hover:shadow-xl"
        >
          Criar conta
        </button>

        {/* Botão Fazer Login */}
        <button
          onClick={() => navigate('/login-form')}
          style={{
            backgroundColor: '#4B5563', // bg-gray-600
            color: 'white',
            padding: '0.5rem 1.5rem', // py-2 px-6
            borderRadius: '0.5rem',
            fontSize: '0.875rem', // 14px (text-sm)
            transition: 'background-color 0.3s',
            width: '100%',
            backdropFilter: 'blur(4px)',
            '@media (min-width: 640px)': {
              padding: '0.75rem 2rem', // md:py-3 md:px-8
              fontSize: '1rem', // 16px (md:text-base)
            },
            '@media (min-width: 1024px)': {
              fontSize: '1.125rem', // 18px (lg:text-lg)
            },
          }}
          className="hover:bg-gray-500"
        >
          Fazer login
        </button>

        {/* Rodapé */}
        <p
          style={{
            marginTop: '1.5rem', // 24px
            color: '#9CA3AF', // gray-400
            fontSize: '0.75rem', // 12px (text-xs)
            fontStyle: 'italic',
            animation: 'fade-in 0.5s ease-out',
            textAlign: 'center',
            '@media (min-width: 640px)': {
              fontSize: '0.875rem', // 14px (md:text-sm)
            },
            '@media (min-width: 1024px)': {
              fontSize: '1rem', // 16px (lg:text-base)
            },
          }}
        >
          Desenvolvido por Flutter
        </p>
      </div>

      {/* Estilos Inline para Animações */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-in {
            from { transform: translateY(10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fade-in-up {
            from { transform: translateY(5px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @media (min-width: 640px) {
            @keyframes slide-in {
              from { transform: translateY(15px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fade-in-up {
              from { transform: translateY(8px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          }
          @media (min-width: 1024px) {
            @keyframes slide-in {
              from { transform: translateY(30px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fade-in-up {
              from { transform: translateY(15px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Login;