import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      div {
        & + div {
          margin-left: 32px;
        }
      }

      a.active::after {
        content: ' ';
        width: 70%;
        height: 2px;
        background: #FF872C;
        display: block;
        margin: 0 auto;
      }

      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
