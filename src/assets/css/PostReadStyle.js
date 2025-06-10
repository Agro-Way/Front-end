import styled from 'styled-components';

const PostReadStyle = styled.section`
  & h1 {
    font-size: 4.5rem;
    margin: 2rem 0;
    line-height: 2;
    color: var(--main);
  }

  .data {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    gap: 1.5rem;

    span {
      font-size: 1.6rem;
      color: var(--primary);

      i {
        font-size: 1.6rem;
        color: var(--main);
      }
    }
  }

  .post-img {
    margin: 0 auto;
    max-width: 500px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .post-content {
    padding: 1rem 0;

    p {
      font-size: 1.7rem;
      line-height: 1.5;
      color: #222;
      padding: 1rem 0;
    }
  }

  @media (max-width: 992px) {
    & h1 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 3rem;
    }
  }
`;

export default PostReadStyle;