// Types provided from the official repo:
// https://github.com/styled-components/jest-styled-components/blob/master/typings/index.d.ts

import { NewPlugin } from 'pretty-format';
import { css } from 'styled-components';

declare global {
  namespace jest {
    interface AsymmetricMatcher {
      $$typeof: Symbol;
      sample?: string | RegExp | object | Array<any> | Function;
    }

    type Value = string | number | RegExp | AsymmetricMatcher | undefined;

    interface Options {
      media?: string;
      modifier?: string | ReturnType<typeof css>;
      supports?: string;
    }

    interface Matchers<R, T> {
      toHaveStyleRule(property: string, value?: Value, options?: Options): R;
    }
  }
}

export interface StyledComponentsSerializerOptions {
  addStyles?: boolean;
  classNameFormatter?: (index: number) => string;
}

export declare const styleSheetSerializer: NewPlugin & {
  setStyleSheetSerializerOptions: (options?: StyledComponentsSerializerOptions) => void;
};
