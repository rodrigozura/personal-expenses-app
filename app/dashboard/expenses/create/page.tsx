
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCurrencies, fetchCustomers, fetchMainCategories, fetchPayMethods, fetchSubCategories, fetchWallets } from '@/app/lib/data';
import Form from '@/app/ui/expenses/create-form';
 
export default async function Page() {
  
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Expense', href: '/dashboard/expenses' },
          {
            label: 'Create Expense',
            href: '/dashboard/expenses/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}