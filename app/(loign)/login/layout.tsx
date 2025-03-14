export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className='h-screen w-full p-3 '>
        <div className='flex h-full w-full p-3 bg-neutral-100 rounded-lg'>
          {children}
        </div>
      </div>
    </section>
  );
}
