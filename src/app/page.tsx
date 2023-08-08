import Image from "next/image";

export default function Page(){
    return <>
        <h1>Hello World</h1>
        <p>There should be an image visible right below this text:</p>
        <Image src="/images/example.jpg" width={756} height={1008} alt="Example" />
    </>;
}