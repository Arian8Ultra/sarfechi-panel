import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className='flex w-full items-center justify-center flex-col gap-3 rounded-lg md:p-0 p-3 md:h-full h-fit mt-auto md:my-0 bg-white md:bg-transparent md:relative absolute bottom-0 left-0 z-20'>
      <h1 className='text-4xl font-bold text-center'>پنل صرفه چی</h1>
      <p className='text-sm text-gray-500'>ورود به پنل صرفه چی</p>
      <div className='w-full max-w-md p-4 bg-white rounded-lg md:shadow-md'>
        {/* Add your login form here */}
        <form>
          <Input
            type='email'
            placeholder='ایمیل'
            className='w-full p-2 border border-gray-300 rounded-lg'
            required
          />
          <Input
            type='password'
            placeholder='رمز عبور'
            className='w-full p-2 mt-4 border border-gray-300 rounded-lg'
            required
          />

          <Button
            type='submit'
            className='w-full py-2 mt-4 text-white bg-purple-400 rounded-lg hover:bg-purple-500 cursor-pointer'
          >
            ورود
          </Button>
        </form>
      </div>

    </div>
  );
}
