import { css } from "styled-components";
class Query {
  constructor(Breakpoints) {
    for (let breakpoint in Breakpoints) {
      let func = this.br(Breakpoints[breakpoint]);
      this[breakpoint] = func;
    }
  }

  br(breakpoint) {
    return function (...args) {
      return css`
        @media screen and (max-width: ${breakpoint}) {
          ${css(...args)}
        }
      `;
    };
  }
}