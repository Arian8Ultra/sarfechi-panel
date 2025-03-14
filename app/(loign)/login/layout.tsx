import Image from "next/image";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className='h-screen w-full md:p-20 relative'>
        <div className='grid md:grid-cols-2 md:h-full w-full bg-neutral-100 rounded-lg'>
          <Image
            src={
              Number((Math.random() * 10).toFixed(0)) % 2
                ? "/images/LoginWide.webp"
                : "/images/Login1x1.webp"
            }
            alt='login'
            width={10000}
            height={10000}
            className='object-cover w-full h-full absolute top-0 left-0 md:hidden'
          />
          <div className='p-3 z-20'>{children}</div>
          <div className='w-full h-full overflow-hidden rounded-lg rounded-s-none md:block hidden'>
            <Image
              src={
                Number((Math.random() * 10).toFixed(0)) % 2
                  ? "/images/LoginWide.webp"
                  : "/images/Login1x1.webp"
              }
              alt='login'
              width={10000}
              height={10000}
              className='object-cover w-full h-full '
            />
          </div>
        </div>
      </div>
    </section>
  );
}
