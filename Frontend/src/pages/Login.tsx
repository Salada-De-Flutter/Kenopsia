import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';

/**
 * Tema personalizado do Material-UI
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6347',
      light: '#FF8367',
      dark: '#E5573E',
    },
    background: {
      default: '#1C1E26',
      paper: '#2D2F3A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

/**
 * Página de Login Responsiva
 * 
 * Componente otimizado para diferentes tamanhos de tela,
 * incluindo webview do Android Studio.
 */
const Login = () => {
  const navigate = useNavigate();
  
  // Breakpoints personalizados para melhor responsividade
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isWebView = useMediaQuery({ maxWidth: 420 });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(180deg, #1C1E26 0%, #2D2F3A 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: isWebView ? 2 : 4,
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: isWebView ? 4 : 6,
            px: isWebView ? 2 : 3,
          }}
        >
          <Grid container spacing={3} direction="column" alignItems="center">
            {/* Logo */}
            <Grid item>
              <Box
                className="group"
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.5s',
                  '&:hover': {
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                <Code
                  size={isMobile ? 48 : 64}
                  className="text-[#FF6347]"
                  aria-label="Logo Kenopsia"
                />
              </Box>
            </Grid>

            {/* Título */}
            <Grid item>
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: 4,
                  textAlign: 'center',
                  position: 'relative',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    inset: -4,
                    background: '#FF6347',
                    opacity: 0.2,
                    borderRadius: 2,
                    filter: 'blur(8px)',
                  },
                }}
              >
                KENOPSIA
              </Typography>
            </Grid>

            {/* Subtítulo */}
            <Grid item>
              <Typography
                variant={isMobile ? 'subtitle2' : 'subtitle1'}
                sx={{
                  letterSpacing: 3,
                  opacity: 0.9,
                  textAlign: 'center',
                }}
              >
                R E M E M B E R - T H E - P A S T
              </Typography>
            </Grid>

            {/* Descrição */}
            <Grid item>
              <Typography
                variant={isMobile ? 'body2' : 'body1'}
                sx={{
                  textAlign: 'center',
                  opacity: 0.8,
                  maxWidth: isWebView ? '280px' : '320px',
                  margin: '0 auto',
                }}
              >
                Uma recriação e homenagem ao Omlet Arcade
              </Typography>
            </Grid>

            {/* Botões */}
            <Grid item container direction="column" spacing={2} sx={{ width: '100%', mt: 2 }}>
              <Grid item>
                <Button
                  fullWidth
                  variant="contained"
                  size={isMobile ? 'medium' : 'large'}
                  onClick={() => navigate('/register')}
                  sx={{
                    background: 'linear-gradient(45deg, #FF6347 30%, #FF8367 90%)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    py: isWebView ? 1.5 : 2,
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF8367 30%, #FF6347 90%)',
                    },
                  }}
                >
                  Criar conta
                </Button>
              </Grid>
              <Grid item>
                <Button
                  fullWidth
                  variant="outlined"
                  size={isMobile ? 'medium' : 'large'}
                  onClick={() => navigate('/login-form')}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    py: isWebView ? 1.5 : 2,
                    backdropFilter: 'blur(4px)',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      background: 'rgba(255,255,255,0.05)',
                    },
                  }}
                >
                  Fazer login
                </Button>
              </Grid>
            </Grid>

            {/* Rodapé */}
            <Grid item sx={{ mt: isWebView ? 4 : 6 }}>
              <Typography
                variant="caption"
                sx={{
                  opacity: 0.6,
                  fontStyle: 'italic',
                }}
              >
                Desenvolvido por Flutter
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Login;