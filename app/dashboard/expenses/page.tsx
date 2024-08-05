import { CreateExpense } from '@/app/ui/expenses/buttons';
import { monstserrat } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import Table from '@/app/ui/expenses/table';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${monstserrat.className} text-2xl`}>Expenses</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search expense..." />
        <CreateExpense />
      </div>
      <Table />
    </div>
  );
}
