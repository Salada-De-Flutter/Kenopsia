import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code } from 'lucide-react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  ThemeProvider,
} from '@mui/material';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

const Login = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box
        sx={{
          minHeight: '100vh',
          width: '100%',
          background: 'linear-gradient(180deg, #1C1E26 0%, #2D2F3A 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4 }, // p: padding
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: { xs: 4, sm: 6 },
            px: { xs: 2, sm: 3 },
          }}
        >
          <Grid container spacing={3} direction="column" alignItems="center">
            {/* Logo */}
            <Grid item>
              <Box
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
                  size={48} // Você pode ajustar o tamanho relativo com base nos breakpoints usando sx se necessário
                  aria-label="Logo Kenopsia"
                  style={{ color: '#FF6347' }}
                />
              </Box>
            </Grid>

            {/* Título */}
            <Grid item>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  letterSpacing: 4,
                  textAlign: 'center',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
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
                variant="subtitle1"
                sx={{
                  letterSpacing: 3,
                  opacity: 0.9,
                  textAlign: 'center',
                  fontSize: { xs: '0.8rem', sm: '1rem' },
                }}
              >
                R E M E M B E R - T H E - P A S T
              </Typography>
            </Grid>

            {/* Descrição */}
            <Grid item>
              <Typography
                variant="body1"
                sx={{
                  textAlign: 'center',
                  opacity: 0.8,
                  maxWidth: { xs: '90%', sm: '320px' },
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
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{
                    background: 'linear-gradient(45deg, #FF6347 30%, #FF8367 90%)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    py: { xs: 1.5, sm: 2 },
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
                  size="large"
                  onClick={() => navigate('/login-form')}
                  sx={{
                    borderColor: 'rgba(255,255,255,0.3)',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    py: { xs: 1.5, sm: 2 },
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
            <Grid item sx={{ mt: { xs: 4, sm: 6 } }}>
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
