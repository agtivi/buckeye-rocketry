import Image from "next/image";

export default function SponsorDisplay(){
    return (
      <div className="grid grid-cols-3 gap-[20px]">
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
        <Image
            src="/sponsors/boeing.png"
            alt="Boeing Image"
            width={250}
            height={150}
        />
      </div>
    )
}