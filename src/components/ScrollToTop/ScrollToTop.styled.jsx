import styled from '@emotion/styled';

export const ScrollToAnchor = styled.a`
  margin: 0 auto;
  padding: 0;

  display: block;
  cursor: pointer;

  height: 40px;
  width: 200px;
  background: linear-gradient(#333, #222);
  border: 1px solid #444;
  border-left-color: #000;
  border-radius: 5px;
  box-shadow: 0 2px 0 #000;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  text-shadow: 0 -1px 0 #000;
  text-align: center;
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
`;
