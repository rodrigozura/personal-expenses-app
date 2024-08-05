import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createExpense } from '@/app/lib/actions';
import { fetchCurrencies, fetchMainCategories, fetchPayMethods, fetchSubCategories, fetchWallets } from '@/app/lib/data';

// Tipos de Transacciones
export const transactionTypes: { id: number; type: string }[] = [
  { id: 1, type: 'Ingreso' },
  { id: 2, type: 'Gasto' },
  { id: 3, type: 'Inversión' },
  { id: 4, type: 'Ahorro' },
  { id: 5, type: 'Préstamo' },
  { id: 6, type: 'Misceláneo' },
];

// Categorías Principales y sus SubCategorías
// export const mainCategories = [
//   {id: 1, name: "Supermercado"},
//   {id: 2, name: "Transporte"},
//   {id: 3, name: "Verduleria"},
//   {id: 4, name: "Gustos"},
//   {id: 5, name: "Regalos"}
// ]

// export const currencies = [
//   { id: 1, name: 'ARS' },
//   { id: 2, name: 'USD' },
// ]

// export const payMethods = [
//   { id: 1, name: 'Caja de Ahorro' },
//   { id: 2, name: 'Billetera' },
//   { id: 3, name: 'Mercado Pago' },
//   { id: 4, name: 'Lemond' },
//   { id: 5, name: 'Uala' },
//   { id: 6, name: 'Tarjeta de Credito VISA' },
//   { id: 7, name: 'Tarjeta de Credito MASTER' },
// ]

// export const wallets = [
//   { id: 1, name: 'Galicia' },
//   { id: 2, name: 'Fisica' },
//   { id: 3, name: 'Mercado Pago' },
//   { id: 4, name: 'Lemond' },
//   { id: 5, name: 'Uala' },
//   { id: 6, name: 'Galicia Credito' },
// ]

export default async function Form() {
  const mainCategories = await fetchMainCategories();
  const subCategories = await  fetchSubCategories();
  const currencies = await fetchCurrencies();
  const payMethods = await fetchPayMethods();
  const wallets = await fetchWallets();

  // console.log("mainCategories: ", mainCategories)
  // console.log("subCategories: ", subCategories)
  // console.log("currencies: ", currencies)
  // console.log("payMethods: ", payMethods)
  // console.log("wallets: ", wallets)

  return (
    <form action={createExpense}>
      <div className="rounded-md bg-gray-50 p-4 text-black">
        {/* User */}
        <div className="mb-4">
          <label htmlFor="user" className="mb-2 block text-sm font-medium">
            Enter your user
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="user"
                name="user"
                type="text"
                placeholder="Enter your user"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            What do you buy?
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your buy"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Expense Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Main Category */}
        <div className="mb-4">
          <label
            htmlFor="mainCategory"
            className="mb-2 block text-sm font-medium text-black"
          >
            Main category
          </label>
          <div className="relative">
            <select
              id="mainCategory"
              name="mainCategory"
              className="placeholder:text-black-500 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a main category
              </option>
              {mainCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
        </div>

        {/* Sub Category */}
        <div className="mb-4">
          <label
            htmlFor="subCategory"
            className="mb-2 block text-sm font-medium text-black"
          >
            Sub category
          </label>
          <div className="relative">
            <select
              id="subCategory"
              name="subCategory"
              className="placeholder:text-black-500 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a sub category
              </option>
              {subCategories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
        </div>

        {/* Currency */}
        <div className="mb-4">
          <label
            htmlFor="currency"
            className="mb-2 block text-sm font-medium text-black"
          >
            Currency
          </label>
          <div className="relative">
            <select
              id="currency"
              name="currency"
              className="placeholder:text-black-500 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a currency
              </option>
              {currencies.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
        </div>

        {/* Pay Method */}
        <div className="mb-4">
          <label
            htmlFor="payMethod"
            className="mb-2 block text-sm font-medium text-black"
          >
            Pay method
          </label>
          <div className="relative">
            <select
              id="payMethod"
              name="payMethod"
              className="placeholder:text-black-500 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a pay method
              </option>
              {payMethods.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
        </div>

         {/* Wallet */}
         <div className="mb-4">
          <label
            htmlFor="wallet"
            className="mb-2 block text-sm font-medium text-black"
          >
            Wallet
          </label>
          <div className="relative">
            <select
              id="wallet"
              name="wallet"
              className="placeholder:text-black-500 peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm text-black outline-2"
              defaultValue=""
            >
              <option value="" disabled>
                Select a wallet
              </option>
              {wallets.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="text-black-500 pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
        </div>

        {/* Invoice Status */}
        {/* <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset> */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/expenses"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Expense</Button>
      </div>
    </form>
  );
}
