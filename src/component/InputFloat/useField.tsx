import {
  useState,
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';

type Result<V> = {
  name: string;
  value: V | undefined;
};

type Config<V> = {
  name: string;
  initialValue: V;
  callbackFn: (result: Result<V>) => void;
  transformFn?: (result: Result<V>) => Result<V>;
  triggerCallbackOnChange?: boolean;
  triggerOnChangeDebounceMs?: number;
};

export type CallbackFunction<V> = (result: Result<V>) => void;
export type InnerDirectChange<V> = (
  value: V | React.FormEvent<HTMLInputElement>,
) => void;

function isFormEvent(
  event: unknown,
): event is React.FormEvent<HTMLInputElement> {
  if (typeof event === 'object' && (event as any).currentTarget !== undefined) {
    return true;
  }

  return false;
}

export const useField = <V extends unknown>({
  name,
  callbackFn,
  initialValue,
  transformFn = value => value,
  triggerCallbackOnChange = false,
  triggerOnChangeDebounceMs = 0,
}: Config<V>) => {
  const isFirstRun = useRef(true);
  const [value, setValue] = useState<V>(initialValue);

  const [triggetCallback] = useDebouncedCallback(
    () =>
      callbackFn(
        transformFn({
          name,
          value,
        }),
      ),
    triggerOnChangeDebounceMs,
  );

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (triggerCallbackOnChange) {
      triggetCallback();
    }
  }, [
    triggerCallbackOnChange,
    triggetCallback,
    value,
    triggerOnChangeDebounceMs,
    callbackFn,
    transformFn,
  ]);

  const onChange: InnerDirectChange<V> = (event: unknown) => {
    if (isFormEvent(event)) {
      event.persist();

      if (event.currentTarget.checked !== undefined) {
        setValue(event.currentTarget.checked as V);
      } else {
        setValue(event.currentTarget.value as V);
      }
      return;
    }

    setValue(event as V);
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = event => {
    triggetCallback();
  };

  const onEnterPressed: KeyboardEventHandler = event => {
    if (event.keyCode === 13) {
      triggetCallback();
    }
  };

  return {
    onChange,
    value,
    onBlur,
    onEnterPressed,
  };
};
