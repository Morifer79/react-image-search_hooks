import styled from '@emotion/styled';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background: #151515;
  height: 90px;
  width: 100%;
  text-align: center;

  /*:is(:before, :after) {
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: 0 0 0 -400px;
    position: absolute;
    width: 800px;
  }*/

  :before {
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: 0 0 0 -400px;
    position: absolute;
    width: 800px;
    background: #444;
    background: linear-gradient(left, #151515, #444, #151515);
    top: 45px;
  }

  :after {
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: 0 0 0 -400px;
    position: absolute;
    width: 800px;
    background: #000;
    background: linear-gradient(left, #151515, #000, #151515);
    top: 44px;
  }
`;

export const SearchForm = styled.form`
  margin: 0 auto;
  padding: 15px;

  position: relative;
  top: 10px;
  z-index: 1;

  display: inline-block;
  background: linear-gradient(#1b1b1b, #111);
  border: 1px solid #000;
  border-radius: 10px;
  box-shadow: inset 0 0 0 1px #272727;
  font-size: 0px;
`;

export const SearchFormInput = styled.input`
  margin-top: 0;
  padding: 0 10px;

  width: 400px;
  height: 40px;
  display: block;
  float: left;
  background: linear-gradient(#333, #222);
  border: 1px solid #444;
  border-radius: 5px 0 0 5px;
  box-shadow: 0 2px 0 #000;
  color: #888;
  font-size: 16px;
  font-weight: 400;
  text-shadow: 0 -1px 0 #000;

  :focus {
    animation: glow 800ms ease-out infinite alternate;
    background: linear-gradient(#333933, #222922);
    border-color: #393;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1),
      0 2px 0 #000;
    color: #efe;
    outline: none;
  }
`;

export const SearchFormButton = styled.button`
  margin: 0;
  padding: 0;

  position: relative;
  display: block;
  float: left;
  cursor: pointer;
  height: 40px;
  width: 80px;

  background: linear-gradient(#333, #222);
  border: 1px solid #444;
  border-left-color: #000;
  border-radius: 0 5px 5px 0;
  box-shadow: 0 2px 0 #000;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  text-shadow: 0 -1px 0 #000;
  transition: background 250ms linear, color 250 linear;

  :is(:hover, :focus) {
    background: linear-gradient(#393939, #292929);
    color: #5f5;
    outline: none;
  }

  :active {
    background: linear-gradient(#393939, #292929);
    box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
    top: 1px;
  }

  @keyframes glow {
    0% {
      border-color: #393;
      box-shadow: 0 0 5px rgba(0, 255, 0, 0.2),
        inset 0 0 5px rgba(0, 255, 0, 0.1), 0 2px 0 #000;
    }
    100% {
      border-color: #6f6;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.6),
        inset 0 0 10px rgba(0, 255, 0, 0.4), 0 2px 0 #000;
    }
  }
`;
