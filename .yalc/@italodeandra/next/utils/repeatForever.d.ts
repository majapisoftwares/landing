export default function repeatForever(fn: () => Promise<void>, interval?: number | string, onError?: (error: Error) => void): Promise<void>;
