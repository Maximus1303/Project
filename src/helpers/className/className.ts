

type Mods = Record<string, string|boolean>



export function className(cls: string, mods: Mods, additional:string[]): string {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter(([cls, v]) => Boolean(v))
            .map(([cls]) => className),
    ]
        .join(' ')


}