export default function repeatUntil(fn: () => Promise<boolean>, interval: number | string): Promise<void>;
