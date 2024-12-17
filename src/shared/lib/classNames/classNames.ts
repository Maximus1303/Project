type Mods = Record<string, string | boolean>


export function classNames(cls: string, mods?: Mods, additional? : string[]): string {
    return [
        cls,
        ...additional.filter(Boolean),
        Object.entries(mods)
            .filter(([cls, v]) => Boolean(v))
            .map(([cls]) => cls),
    ]
        .join(' ')


}