'use server';
import { z } from 'zod'
import { sql } from '@vercel/postgres';
import { Invoice } from './definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import axios from 'axios';

const CreateInvoiceSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
})

const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
    id: true,
    date: true,
})

const CreateExpenseSchema = z.object({
    id: z.string(),
    user: z.string(),
    date: z.string(),
    updateDate: z.string(),
    type: z.string(),
    name: z.string(),
    amount: z.coerce.number(),
    mainCategory: z.string(),
    subCategory: z.string(),
    currency: z.string(),
    payMethod: z.string(),
    wallet: z.string(),
})

const CreateExpenseFormSchema = CreateExpenseSchema.omit({
    id: true,
    date: true,
    type: true,
    updateDate: true,
})

export async function createInvoice(formData: FormData) {
    const { customerId, amount, status } = CreateInvoiceFormSchema.parse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    })

    const amountInCents = amount * 100
    const [date, time] = new Date().toISOString().split('T')

    await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')

    // Test it out:
    // console.log(rawFormData);


}

export async function createExpense(formData: FormData) {
    // console.log(formData)
    const { user, name, amount, mainCategory, subCategory, currency, payMethod, wallet } = CreateExpenseFormSchema.parse({
        user: formData.get('user'),
        name: formData.get('name'),
        amount: formData.get('amount'),
        mainCategory: formData.get('mainCategory'),
        subCategory: formData.get('subCategory'),
        currency: formData.get('currency'),
        payMethod: formData.get('payMethod'),
        wallet: formData.get('wallet'),
    })
    
    try {
        const rest = await axios.post(
            'http://localhost:8000/transaction',
            {
                id: "",
                user,
                date: 1,
                updateDate: 1,
                type: "66a5d6e4e97f3a727df75151",
                name,
                amount,
                mainCategory,
                subCategory,
                currency,
                payMethod,
                wallet,
            }
        )
        console.log("Rest: ", rest.data)
        
    } catch (error) {
        console.log("Error: ", error)
    }

    revalidatePath('/dashboard/expenses');
    redirect('/dashboard/expenses')


}