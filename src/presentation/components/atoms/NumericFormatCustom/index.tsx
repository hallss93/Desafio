import * as React from 'react';
import { NumberFormatBase, NumericFormatProps } from 'react-number-format';

interface CustomProps {
  name: string;
  type_format: string;
}

export default React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustomComponent(props, ref) {
    const { ...other } = props;

    const format = (numStr: any) => {
      if (numStr === '') return '';

      const optionPercent = {
        style: 'percent',
      };

      const optionCurrency = { style: 'currency', currency: 'BRL' };

      return new Intl.NumberFormat(
        'pt-BR',
        props.type_format === 'currency' ? optionCurrency : optionPercent,
      ).format(numStr / 100);
    };

    return <NumberFormatBase {...other} getInputRef={ref} format={format} prefix={'R$'} />;
  },
);
