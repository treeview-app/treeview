import { Text as RNText } from 'react-native';
import styled, { css } from 'styled-components/native';
import { fonts } from '../../styles/fonts';
import type { Theme } from "../../styles/theme";

const Typography = styled(RNText)(
  ({ theme }: { readonly theme: Theme }) => css`
    color: ${theme.text};
    font-size: ${fonts.sizes.s};
    font-weight: ${fonts.weights.medium};
    opacity: ${fonts.emphasis.high};
  `,
);

export { Typography };
