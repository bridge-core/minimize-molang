import { Molang } from 'molang'
import { getStdin } from 'get-stdin'

export function minimize(str: string) {
	const molang = new Molang(undefined, {
		useCache: false,
		useOptimizer: true,
		keepGroups: true,
		earlyReturnsSkipTokenization: false,
		earlyReturnsSkipParsing: false,
	})
	return molang.minimize(molang.parse(str)).toString()
}

if (import.meta.main) {
	const molangStr = await getStdin({ exitOnEnter: false })

	Deno.stdout.write(new TextEncoder().encode(minimize(molangStr)))
}
