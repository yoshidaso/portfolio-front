import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'Freelance Engineer Portfolio showcasing projects and skills',
  keywords: ['freelance', 'engineer', 'portfolio', 'developer', 'projects'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}