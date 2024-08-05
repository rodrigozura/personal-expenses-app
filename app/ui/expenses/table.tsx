import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency, formatDate } from '@/app/lib/utils';
import { fetchExpenses } from '@/app/lib/data';

export interface ExpenseType {
    id: string
    user: string
    date: number
    updateDate: number
    type: string
    name: string
    amount: number
    mainCategory: string
    subCategory: string
    currency: string
    payMethod: string
    wallet: string
  }


export default async function ExpenseTable() {
  const expenses = await fetchExpenses();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {expenses?.map((expense: ExpenseType ) => (
              <div
                key={expense.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{expense.user}</p>
                    </div>
                    <p className="text-sm text-gray-500">{expense.name}</p>
                  </div>
                  <InvoiceStatus status={expense.name} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(expense.amount)}
                    </p>
                    <p>{expense.date}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={expense.id} />
                    <DeleteInvoice id={expense.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  User
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Descripction
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Main Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sub Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Currency
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Pay Method
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Wallet
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {expenses?.map((expense: ExpenseType) => (
                <tr
                  key={expense.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{formatDate(expense.updateDate)}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.user}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.type}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(expense.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.mainCategory}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.subCategory}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.currency}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.payMethod}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {expense.wallet}
                  </td>
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={expense.id} />
                      <DeleteInvoice id={expense.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
