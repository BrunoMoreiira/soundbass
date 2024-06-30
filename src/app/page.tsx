"use client";
import styled, { keyframes } from 'styled-components';

// Keyframes para a animação de rotação
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Estilo para o ícone da ampulheta
const HourglassIcon = styled.div`
  border: 6px solid transparent;
  border-top: 6px solid #333;
  border-bottom: 6px solid #333;
  border-radius: 50%;
  width: 50px;
  height: 85px;
  animation: ${spinAnimation} 1s linear infinite;
`;

// Container para centralizar o ícone
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Torna o container ocupar toda a altura da tela */
`;

export default function Home() {
  return (
    <LoadingContainer>
      <HourglassIcon />
    </LoadingContainer>
  );
}
