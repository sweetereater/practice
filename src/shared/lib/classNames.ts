type Modes = Record<string, boolean | string>

export type ClassNamesTypes = {
    mainCls: string
    modes?: Modes
    additional?: string[]
}

export function classNames({
    mainCls,
    modes = {},
    additional = [],
}: ClassNamesTypes): string {
    return [
        mainCls,
        ...additional.filter(Boolean),
        ...Object.entries(modes)
            .filter(([_, value]) => Boolean(value))
            .map(([cls, _]) => cls)
    ].join(' ')
}