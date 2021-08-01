import globby from 'globby'

export default async function listAllRecords(baseDirectory: string): Promise<string[]> {
    const pattern = '**/*.{md,markdown,mdx}'
    const entries = await globby(pattern, { cwd: baseDirectory })
    return entries
}