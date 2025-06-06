// src/assets/css/InfoContactStyle.js

import styled from 'styled-components';

const ContactStyle = styled.section`
  /* infos */
  &.infos {
    .info-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 1.5rem;

      .info {
        text-align: center;
        padding: 2rem;
        box-shadow: var(--box-shadow);
        border: var(--border);
        border-radius: 0.5rem;

        i {
          font-size: 2rem;
          line-height: 6rem;
          width: 6rem;
          height: 6rem;
          margin: 1rem 0;
          color: var(--white);
          background-color: var(--primary);
          border-radius: 50%;

          &:hover {
            background-color: var(--main);
          }
        }

        h3 {
          font-size: 2rem;
          font-weight: bolder;
          color: var(--black);
          padding: 1rem 0;
        }

        p,
        address {
          font-size: 1.5rem;
          line-height: 2;
          color: #777;
        }
      }
    }
  }

  /* contact */
  &.contact {
    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem;

      .image {
        flex: 1 1 30rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .form {
        flex: 1 1 50rem;
        padding: 10rem 5rem 5rem 5rem;
        box-shadow: none;

        .inputBox {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          input,
          textarea {
            padding: 1rem;
            margin: 1rem 0;
            font-size: 1.7rem;
            color: #666;
            border: 0.1rem solid transparent;
            background-color: var(--light-green);
            border-bottom-color: var(--primary);
            border-radius: 0.5rem 0.5rem 0 0;
            width: 49%;

            &:focus {
              border-top-color: var(--primary);
              border-right-color: var(--primary);
              border-left-color: var(--primary);
            }
          }

          textarea {
            resize: none;
            height: 15rem;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 480px) {
    &.contact {
      .row {
        .form {
          .inputBox {
            flex-wrap: wrap;

            input {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export default ContactStyle;
