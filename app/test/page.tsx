import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Test() {
	return (
		<>
			<div>home page</div>
			<Link href="/">link to "/"</Link>
		</>
	)
}