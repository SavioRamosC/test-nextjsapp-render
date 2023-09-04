import { ChildrenProps } from '@/types/children-props';

export default function PostPageContainer({ children }: ChildrenProps) {
  return <main className="min-h-screen py-20 px-20">{children}</main>;
}

{
  /* <main className="m-auto grid grid-cols-2  gap-4 py-20 px-64">{children}</main> */
}
