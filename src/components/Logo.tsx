import Image from 'next/image'

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="Nikola Pajović"
      width={size}
      height={size}
      priority
      className="rounded-lg"
      // Tailwind's preflight sets `img { height: auto }` globally, which
      // fights with next/image's width/height props and triggers a console
      // warning + a slightly stretched render. Inline styles win over that
      // stylesheet rule, so this pins it back to a true square.
      style={{ width: size, height: size }}
    />
  )
}