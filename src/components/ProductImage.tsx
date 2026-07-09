import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
};

export default function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
  fill = true,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  if (fill) {
    return (
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${className}`}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={900}
      height={600}
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}
