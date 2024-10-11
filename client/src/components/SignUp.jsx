import React, { useState } from 'react';
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Link,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/authActions'; // Adjust the path based on your project structure

const AuthContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
  perspective: '1000px', // Add perspective to enable 3D effect
  overflow: 'hidden',
  padding: '0',
  margin: '0',
});

const AuthCard = styled(Card)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '600px',
  width: '100%',
  opacity: 1,
  zIndex: 1,
});

const AuthCardContent = styled(CardContent)({
  backfaceVisibility: 'hidden',
  overflow: 'hidden',
});

function Auth() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isAdministrator, setIsAdministrator] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useNavigate();
  const { token, error } = useSelector((state) => state.auth);

  const toggleForm = () => {
    setIsForgotPassword(false); // Reset forgot password form state
    setIsAdministrator(!isAdministrator);
  };

  const handleForgotPassword = () => {
    // Simulate sending confirmation email
    alert('Confirmation email sent. Check your email for further instructions.');
    setIsForgotPassword(true); // Directly show the reset password form
  };

  const handleResetPassword = () => {
    // Simulate resetting password
    alert('Password reset successfully. You can now sign in with your new password.');
    setIsForgotPassword(false); // Back to sign-in form
  };

  const handleAdminSignIn = async (event) => {
    event.preventDefault();
    await dispatch(login(username, password));
    
    if (token) {
      history('/list');
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardContent>
          {!isForgotPassword && !isAdministrator && (
            <>
              <Typography variant="h4" align="center" gutterBottom>
                Student Sign In
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                style={{
                  background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
                  border: 'none',
                  color: 'white',
                  marginTop: '16px',
                }}
              >
                Sign In
              </Button>
              <Typography align="center" style={{ marginTop: '16px' }}>
                <Link href="#" onClick={toggleForm} style={{ color: '#888' }}>
                  Administrator Sign In
                </Link>
              </Typography>
              <Typography align="center" style={{ marginTop: '8px', color: '#888' }}>
                <Link href="#" onClick={handleForgotPassword} style={{ color: '#888' }}>
                  Forgot Password?
                </Link>
              </Typography>
            </>
          )}
          {!isForgotPassword && isAdministrator && (
            <>
              <Typography variant="h4" align="center" gutterBottom>
                Administrator Sign In
              </Typography>
              <form onSubmit={handleAdminSignIn}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
                    border: 'none',
                    color: 'white',
                    marginTop: '16px',
                  }}
                >
                  Sign In
                </Button>
              </form>
              {error && (
                <Typography color="error" align="center" style={{ marginTop: '16px' }}>
                  {error}
                </Typography>
              )}
              <Typography align="center" style={{ marginTop: '16px' }}>
                <Link href="#" onClick={toggleForm} style={{ color: '#888' }}>
                  Student Sign In
                </Link>
              </Typography>
            </>
          )}
          {isForgotPassword && (
            <>
              <Typography variant="h4" align="center" gutterBottom>
                Forgot Password
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleForgotPassword}
                style={{
                  background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
                  border: 'none',
                  color: 'white',
                  marginTop: '16px',
                }}
              >
                Submit
              </Button>
              <Typography align="center" style={{ marginTop: '16px' }}>
                <Link href="#" onClick={() => setIsForgotPassword(false)} style={{ color: '#888' }}>
                  Back to Sign In
                </Link>
              </Typography>
            </>
          )}
        </AuthCardContent>
      </AuthCard>
    </AuthContainer>
  );
}

export default Auth;
