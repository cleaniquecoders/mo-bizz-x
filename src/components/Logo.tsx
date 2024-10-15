import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" {...props}>
      <text
        x="50"
        y="60"
        fill="#0F172A"
        fontSize="48"
        fontFamily="var(--font-inter)"
        fontWeight="bold"
      >
        MoBixxZ
      </text>
    </svg>
  )
}
