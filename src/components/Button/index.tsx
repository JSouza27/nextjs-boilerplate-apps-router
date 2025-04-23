import { HtmlHTMLAttributes } from 'react';

type ButtonType = {
  text: string;
} & HtmlHTMLAttributes<HTMLElement>;

export default function Button({ text, ...props }: ButtonType) {
  return (
    <button className="min-w-[4rem] px-4 py-2 rounded- bg-blue-600" {...props}>
      <span>{text}</span>
    </button>
  );
}
