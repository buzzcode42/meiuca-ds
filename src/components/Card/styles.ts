import styled, { css } from 'styled-components'

import { palette, spacing } from 'styles/theme'

export const Card = styled.article`
  ${() => css`
    background-color: ${palette.color.neutral[2]};
    width: 300px;
    height: 475px;
    padding: ${spacing.size.xxs};
  `}
`
export const CardHeader = styled.header`
  ${() => css``}
`
export const CardBody = styled.body`
  ${() => css`
    p {
      width: 100%;
      margin-bottom: 5rem;
    }
  `}
`
