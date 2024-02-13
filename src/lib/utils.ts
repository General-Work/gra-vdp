import { type ClassValue, clsx } from "clsx";
import { toast, ToastOptions } from "react-hot-toast";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertParam = (
  value: string | null | string[],
  selectedDates?: string[] | null | Date[],
  name?: string
) => ({
  target: { value, name, selectedDates },
});

export function getInitials(val?: string) {
  if (!val) return "";
  return val
    .split(" ")
    .filter((x) => x.length > 1)
    .map((x) => x[0])
    .join("");
}

export const showError = (err: string, options?: ToastOptions) => {
  return toast.error(err, { id: err, ...options });
};

export const showSuccess = (err: string, options?: ToastOptions) => {
  return toast.success(err, { id: err, ...options });
};

interface ToastPromiseOptions {
  promise: Promise<any>;
  loading: string;
  success: string;
  error: string;
  options?: ToastOptions;
}

export const showPromise = async ({
  promise,
  loading,
  success,
  error,
  options,
}: ToastPromiseOptions) => {
  try {
    toast.loading(loading, options);

    const result = await promise;

    toast.success(success, { ...options, id: success });

    return result;
  } catch (err) {
    toast.error(error, { ...options, id: error });
    throw err;
  }
};
