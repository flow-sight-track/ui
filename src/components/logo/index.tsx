import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/dashboard" passHref>
      <Image src="/assets/images/logo.svg" alt="Logo" width={42} height={42} />
    </Link>
  )
}
