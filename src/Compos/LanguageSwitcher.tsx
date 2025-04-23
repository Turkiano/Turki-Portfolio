import { useEffect, useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: "en", label: "English", dir: "ltr", font: "font-sans" },
  { code: "ar", label: "العربية", dir: "rtl", font: "font-arabic" },
]

export function LanguageSwitcher() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en"
  })

  useEffect(() => {
    const selected = languages.find((l) => l.code === language) || languages[0]
    document.documentElement.lang = selected.code
    document.documentElement.dir = selected.dir

    // Font switching via HTML class
    document.documentElement.classList.remove(...languages.map((l) => l.font))
    document.documentElement.classList.add(selected.font)
  }, [language])

  const handleChange = (code: string) => {
    setLanguage(code)
    localStorage.setItem("lang", code)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="capitalize">{language}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className="capitalize"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
