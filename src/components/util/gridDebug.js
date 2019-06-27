import React from 'react'
import styled, { css, withTheme } from 'styled-components'
import { config } from '../../index'

const Grid = styled(({ className, ...props }) => {
  console.log('oi')
  const createColumns = qty => {
    let columns = []
    for (let i = 0; i < qty; i++) {
      columns.push(<div className='css-grid-overlay__column' />)
    }
    return columns
  }
  return (
    <div className={className}>
      {[ 'xs', 'sm', 'md', 'lg', 'xl' ].map(d => {
        let columns = createColumns(config(props).columns[ d ])
        return (
          <div className={`css-grid-overlay-${d}`}>
            <div className='css-grid-overlay__row'>
              {columns.map(c => c)}
            </div>
          </div>
        )
      })}
    </div>

  )
})`
     ${p => css`
      
      ${[ 'xs', 'sm', 'md', 'lg', 'xl' ].map(d => 
        config(p).breakpoints[ d ] && config(p).media[ d ]`

          .css-grid-overlay-xs {display: ${d === 'xs' ? 'block' : 'none'}}
          .css-grid-overlay-sm {display: ${d === 'sm' ? 'block' : 'none'}}
          .css-grid-overlay-md {display: ${ d === 'md' ? 'block' : 'none'}}
          .css-grid-overlay-lg {display: ${ d === 'lg' ? 'block' : 'none'}}
          .css-grid-overlay-xl {display: ${ d === 'xl' ? 'block' : 'none'}}
          
          background-color: rgba(0, 253, 42, .3);
          height: 100vh;
          left: 0;
          padding-left: ${config(p).gutterWidth[ d ]}rem;
          padding-right: ${config(p).gutterWidth[ d ]}rem;
          pointer-events: none;
          position: absolute;
          right: 0;
          top: 0;
          z-index: 13371337;
      
        .css-grid-overlay-${d} {
          background-color: rgba(0, 231, 255, .3);
          height: 100vh;
          margin: 0 auto;
          max-width: none;
        }

        .css-grid-overlay__row {
          display: flex;
          margin-left: -${config(p).gutterWidth[ d ] / 2}rem;
          margin-right: -${config(p).gutterWidth[ d ] / 2}rem;
        }
      
        .css-grid-overlay__column {
          background-color: ${[ 'xs', 'md', 'xl' ].indexOf(d) !== -1 ? 'rgba(234, 23, 140, .3)' : 'rgba(255, 145, 46, .3)'};
          box-sizing: border-box;
          height: 100vh;
          margin: 0 ${config(p).gutterWidth[ d ] / 2}rem;
          width: calc(100% / ${config(p).columns[ d ]});
        }
      `)}
    `}
  }
`

export default withTheme(Grid)
