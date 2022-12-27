import { useForm } from 'react-hook-form'
import { Button } from './Button'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser'
function MailIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const router = useRouter()
  const onSubmit = async (data: any) => {
    console.log(data)
    const { email, name, subject, message } = data

    try {
      const templateParams = { email, name, subject, message }
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      reset()
      router.push('/thank-you')
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-stratos-300/10 p-6 dark:border-stratos-300/60"
      >
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Contact Me</span>
        </h2>

        <div className="mt-6 flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            {...register('email')}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-tahiti-500 focus:outline-none focus:ring-4 focus:ring-tahiti-500/10 dark:border-stratos-300/60 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tahiti-400 dark:focus:ring-tahiti-400/10 sm:text-sm"
          />
          <input
            type="text"
            placeholder="Name"
            aria-label="Name"
            required
            {...register('name')}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-tahiti-500 focus:outline-none focus:ring-4 focus:ring-tahiti-500/10 dark:border-stratos-300/60 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tahiti-400 dark:focus:ring-tahiti-400/10 sm:text-sm"
          />
          <input
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            required
            {...register('subject')}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-tahiti-500 focus:outline-none focus:ring-4 focus:ring-tahiti-500/10 dark:border-stratos-300/60 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tahiti-400 dark:focus:ring-tahiti-400/10 sm:text-sm"
          />
          <textarea
            placeholder="Message"
            {...register('message')}
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-tahiti-500 focus:outline-none focus:ring-4 focus:ring-tahiti-500/10 dark:border-stratos-300/60 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tahiti-400 dark:focus:ring-tahiti-400/10 sm:text-sm"
          ></textarea>
          <Button type="submit" className="flex-none">
            Send
          </Button>
        </div>
      </form>
    </>
  )
}
