import Header from "@app/components/private/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-screen overflow-hidden h-svh">
      <Header />
      <div className="flex-grow bg-white pt-6 overflow-y-hidden ">{children}</div>
    </div>
  );
}
