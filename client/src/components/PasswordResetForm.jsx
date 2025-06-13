import React, { useState } from 'react';
import { Container, Card, CardContent, TextField, Button, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';

const AuthContainer = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
  perspective: '1000px',
  overflow: 'hidden',
  padding: '0',
  margin: '0'
});

const AuthCard = styled(Card)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '600px',
  width: '100%',
  transition: 'transform 0.6s, opacity 0.6s',
  opacity: 1,
  zIndex: 1
});

const AuthCardContent = styled(CardContent)({
  backfaceVisibility: 'hidden',
  overflow: 'hidden'
});

function PasswordResetForm() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password reset successfully. You can now sign in with your new password.');
    history.push('/signin'); 
  };

  return (
    <AuthContainer>
      <AuthCard>
        <AuthCardContent>
          <Typography variant="h4" align="center" gutterBottom>Reset Password</Typography>
          <TextField
            type="password"
            name="newPassword"
            label="New Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            style={{
              background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 50%, #001f3f 100%)',
              border: 'none',
              color: 'white',
              marginTop: '16px'
            }}
          >
            Reset Password
          </Button>
          <Typography align="center" style={{ marginTop: '16px' }}>
            <Link href="/signin" style={{ color: '#fff' }}>Back to Sign In</Link>
          </Typography>
        </AuthCardContent>
      </AuthCard>
    </AuthContainer>
  );
}

export default PasswordResetForm;
