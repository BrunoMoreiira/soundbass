"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContextWrapper } from "@/contexts/ContextWrapper";
import { Toast, ToastProvider } from "@radix-ui/react-toast";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider/ReactQueryClientProvider";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

if (process.env.NODE_ENV === "production") {
  console.log = () => {};
  console.error = () => {};
  console.warn = () => {};
  console.info = () => {};
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextWrapper>
      <html lang="pt_BR">
        <body className={cn(font.className, "h-screen w-screen overflow-hidden")}>
          <ReactQueryClientProvider>
            <ToastProvider>
              <Toast />
              {children}
            </ToastProvider>
          </ReactQueryClientProvider>
        </body>
      </html>
    </ContextWrapper>
  );
}
