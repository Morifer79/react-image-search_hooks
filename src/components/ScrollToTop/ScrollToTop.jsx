import React from 'react';
import { ScrollTo } from 'react-scroll-to';
import { ScrollToAnchor } from './ScrollToTop.styled';

export class ScrollToTop extends React.Component {
  render() {
    return (
      <ScrollTo>
        {({ scroll }) => (
          <ScrollToAnchor onClick={() => scroll({ x: 20, y: 0 })}>
            Scroll Up
          </ScrollToAnchor>
        )}
      </ScrollTo>
    );
  }
}
