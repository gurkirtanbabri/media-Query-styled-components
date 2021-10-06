
# Media Queries in Styled Components






## Usage/Examples


```javascript
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
```


Define Breakpoints :- 

```javascript
    const breakpoints = {
        sm: '400px',
        md: '700px'
    }
```


Create And Export A Query Object Using 'Query' class :-

```javascript
    export const query = Query(breakpoints) 
```

Create A Styled Component :- 


```javascript
   const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background: Blue;

    ${
        query.sm`
            background: ${({ sm }) => sm}
        `
     }
   `

    ${
        query.md`
            background: ${({ sm }) => sm}
        `
     }
```

Use :-

```javascript
    <Wrapper sm="Red" md="Green" />
```
