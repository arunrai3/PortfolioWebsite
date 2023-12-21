import Footer from "@/components/Footer";
import Landing from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between '>
			<Landing/>
			<Skills/>
			<Projects/>
			<Footer/>
		</main>
	);
}
