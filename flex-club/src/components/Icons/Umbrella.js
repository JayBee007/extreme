import React from 'react';

const SvgUmbrella = props => (
  <svg width={100} height={100} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M66.499 46.501c-3.037 0-5.5 1.343-5.5 2.999 0-1.656-2.461-2.999-5.5-2.999-1.863 0-3.504.509-4.498 1.282v8.716h1v4a2 2 0 0 0 3.998 0 2 2 0 0 1 4 0 5.999 5.999 0 1 1-11.998 0v-4h1v-8.716c-.994-.773-2.635-1.282-4.5-1.282-3.037 0-5.498 1.343-5.498 2.999 0-1.656-2.463-2.999-5.5-2.999s-5.5 1.343-5.5 2.999c0-7.179 9.85-15.998 21.999-15.998S71.997 42.321 71.997 49.5c0-1.656-2.461-2.999-5.498-2.999z"
    />
  </svg>
);

export default SvgUmbrella;
