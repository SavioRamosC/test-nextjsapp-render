import { ChildrenProps } from '@/types/children-props';

export default function HomeContainer({ children }: ChildrenProps) {
  return <main className="m-auto grid grid-cols-2  gap-4 py-8 px-64">{children}</main>;
}
