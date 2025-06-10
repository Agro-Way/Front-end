import styled from 'styled-components';

const AboutStyle = styled.section`
  /* section-about */
  &.section-about {
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main);

    .content {
      text-align: center;

      h3 {
        font-size: 2.5rem;
        color: var(--white);
        text-transform: uppercase;
        font-weight: bolder;
        margin-bottom: 3rem;
      }

      p {
        font-size: 2rem;
        color: var(--white);
        line-height: 1.5;
        padding: 1rem 0;
      }

      .btn:hover {
        border: var(--border3);
      }
    }
  }

  /* focus */
  &.focus {
    .box-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
      gap: 2rem;

      .box {
        background: var(--white);
        border-radius: 0.5rem;
        box-shadow: var(--box-shadow);
        position: relative;
        overflow: hidden;
        text-align: center;

        .image {
          position: relative;
          overflow: hidden;

          img {
            width: 100%;
            object-fit: cover;
          }

          .share {
            position: absolute;
            bottom: -10rem;
            left: 0;
            right: 0;
            padding: 2rem;
            background: rgba(242, 242, 242, 0.6);
            transition: bottom 0.3s ease;

            a {
              height: 4rem;
              width: 4rem;
              line-height: 4rem;
              font-size: 2rem;
              margin: 0 1rem;
              color: var(--white);
              background: var(--primary);
              border-radius: 0.5rem;
              display: inline-block;
              transition: all 0.3s;

              &:hover {
                color: var(--primary);
                background: var(--white);
              }
            }
          }
        }

        &:hover .image .share {
          bottom: 0;
        }

        .content {
          padding: 2rem;
          padding-top: 1rem;
          align-items: center;

          h3 {
            font-size: 2rem;
            color: var(--black);
          }

          h5 {
            font-size: 1.7rem;
            line-height: 2;
            color: #777;
          }
        }
      }
    }
  }
`;

export default AboutStyle;
