import React, {
  FC,
  useState,
  useEffect,
  FocusEventHandler,
  memo,
  useRef,
} from 'react';
import { Input, Button, Container } from './styles';

type Props = React.ComponentProps<typeof Input> & {
  value: number;
  max: number;
  min: number;
  resolution: number;
  onChange: (value: number) => void;
};

const deriveCurrentValue = (text: string, value: number) => {
  const parsedText = Number.parseFloat(text);
  const isTextValid = !isNaN(parsedText);
  const currentValue = isTextValid ? parsedText : value;

  return currentValue;
};

const precisionDigits = (resolution: number) => {
  const digits = (resolution.toString().split('.')[1] || []).length;
  return digits;
};

const toRange = (value: number, max: number, min: number) => {
  if (value > max) return max;
  if (value < min) return min;

  return value;
};

const toFixed = (value: number, resolution: number) => {
  const digits = precisionDigits(resolution);
  if (digits > 0) {
    return Number.parseFloat(value.toFixed(digits));
  }

  return value;
};

const step = (
  mode: 'INCREMENT' | 'DECREMENT',
  value: number,
  textValue: string,
  max: number,
  min: number,
  resolution: number,
) => {
  const currentValue = deriveCurrentValue(textValue, value);
  const newValue = toFixed(
    toRange(
      mode === 'INCREMENT'
        ? currentValue + resolution
        : currentValue - resolution,
      max,
      min,
    ),
    resolution,
  );

  return newValue;
};

const InputFloat: FC<Props> = memo(
  ({ value, resolution, min, max, onChange, onBlur, ...props }) => {
    const inputRef = useRef<HTMLInputElement>();
    const [internalValue, setInternalValue] = useState<number>(value);
    const [internalText, setInternalText] = useState<string>(value.toString());

    useEffect(() => {
      setInternalValue(value);
      setInternalText(value.toString());
    }, [resolution, value]);

    const inc = () => {
      const newValue = step(
        'INCREMENT',
        internalValue,
        internalText,
        max,
        min,
        resolution,
      );

      onChange(newValue);
      inputRef.current!.focus();
    };

    const dec = () => {
      const newValue = step(
        'DECREMENT',
        internalValue,
        internalText,
        max,
        min,
        resolution,
      );

      onChange(newValue);
      inputRef.current!.focus();
    };

    const internalOnChange: React.ChangeEventHandler<
      HTMLInputElement
    > = event => {
      const newValue = event.currentTarget.value;
      setInternalText(newValue);
    };

    const internalOnBlur: FocusEventHandler<HTMLInputElement> = event => {
      if (onBlur) onBlur(event);
      const currentValue = deriveCurrentValue(internalText, internalValue);

      const afterBlurValue = toFixed(
        toRange(currentValue, max, min),
        resolution,
      );

      setInternalValue(afterBlurValue);
      setInternalText(afterBlurValue.toString());
      onChange(afterBlurValue);
    };

    return (
      <Container>
        <Button
          type="button"
          onClick={() => {
            dec();
          }}
          mr={1}
        >
          -
        </Button>
        <Input
          ref={inputRef as any}
          onChange={internalOnChange}
          onBlur={internalOnBlur}
          value={internalText}
          {...props}
        />
        <Button
          type="button"
          onClick={() => {
            inc();
          }}
          ml={1}
        >
          +
        </Button>
      </Container>
    );
  },
);

export { InputFloat };
