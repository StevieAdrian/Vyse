
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';

export function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                width: '100%',
                px: 2,
                py: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                    'radial-gradient(circle at top, rgba(37, 99, 235, 0.08), transparent 28%), linear-gradient(180deg, #02040a 0%, #050814 100%)',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    maxWidth: '430px',
                    px: { xs: 3, sm: 4 },
                    py: { xs: 4, sm: 4.5 },
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(14, 17, 27, 0.92)',
                    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.45)',
                    backdropFilter: 'blur(18px)',
                }}
            >
                <Stack component="form" spacing={3}>
                    <Stack spacing={1.25} textAlign="center">
                        <Typography sx={{ color: '#f3f4f6', fontSize: { xs: '1.9rem', sm: '2.15rem' }, fontWeight: 800, lineHeight: 1.15 }}>
                            Welcome Back
                        </Typography>
                        <Typography sx={{ color: 'rgba(229, 231, 235, 0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Login back to your account to continue your cinematic journey
                        </Typography>
                    </Stack>

                    <Stack spacing={2.1}>
                        <Stack spacing={0.75}>
                            <Typography sx={{ color: '#f9fafb', fontSize: '0.78rem', fontWeight: 700 }}>
                                Username <Box component="span" sx={{ color: '#ef4444' }}>*</Box>
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Choose a unique username"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: {
                                            height: 48,
                                            borderRadius: '8px',
                                            color: '#f3f4f6',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        },
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.18)',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6d4aff',
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'rgba(229, 231, 235, 0.42)',
                                        opacity: 1,
                                    },
                                }}
                            />
                        </Stack>

                        <Stack spacing={0.75}>
                            <Typography sx={{ color: '#f9fafb', fontSize: '0.78rem', fontWeight: 700 }}>
                                Password <Box component="span" sx={{ color: '#ef4444' }}>*</Box>
                            </Typography>
                            <TextField
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Create a strong password"
                                variant="outlined"
                                slotProps={{
                                    input: {
                                        sx: {
                                            height: 48,
                                            borderRadius: '8px',
                                            color: '#f3f4f6',
                                            backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                        },
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    edge="end"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                                                    sx={{ color: 'rgba(229, 231, 235, 0.56)' }}
                                                >
                                                    {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.08)',
                                    },
                                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.18)',
                                    },
                                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#6d4aff',
                                    },
                                    '& .MuiInputBase-input::placeholder': {
                                        color: 'rgba(229, 231, 235, 0.42)',
                                        opacity: 1,
                                    },
                                }}
                            />
                        </Stack>
                    </Stack>

                    <Button
                        type="submit"
                        fullWidth
                        sx={{
                            height: 48,
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: '#f8fafc',
                            background: 'linear-gradient(90deg, #5b38f6 0%, #6d4aff 100%)',
                            boxShadow: 'none',
                        }}
                    >
                        Login
                        <Box component="span" sx={{ ml: 1, fontSize: '1rem', lineHeight: 1 }}>
                            →
                        </Box>
                    </Button>

                    <Stack spacing={0.8} textAlign="center">
                        <Typography sx={{ color: 'rgba(229, 231, 235, 0.62)', fontSize: '0.8rem' }}>
                            Don&apos;t have an account yet?
                        </Typography>
                        <Link href="/register" sx={{ color: '#7c66ff', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'underline' }}>
                            Sign up here
                        </Link>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}