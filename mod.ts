import { MoLang } from 'molang'
import { getStdin } from 'get-stdin'

export function minimize(str: string) {
	const molang = new MoLang()
	return molang.resolveStatic(molang.parse(str)).toString()
}

if (import.meta.main) {
	const molangStr = await getStdin({ exitOnEnter: false })

	Deno.stdout.write(new TextEncoder().encode(minimize(molangStr)))
}
