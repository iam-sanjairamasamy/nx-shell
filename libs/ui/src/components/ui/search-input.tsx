import { Input } from "./input"
import { Loader2, Search } from "lucide-react"


interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  loading?: boolean
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className,
  loading = false,
}: SearchInputProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10"
      />
      {loading && (
        <Loader2 className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 animate-spin text-muted-foreground" />
      )}
    </div>
  )
}
