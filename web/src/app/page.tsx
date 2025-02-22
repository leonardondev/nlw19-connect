import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { ArrowRight, Copy, User } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex flex-col items-start gap-4 m-4">
      <Button>
        Enviar
        <ArrowRight />
      </Button>

      <InputRoot>
        <InputIcon>
          <User className="size-5" />
        </InputIcon>
        <InputField placeholder="Placeholder" />
      </InputRoot>

      <InputRoot error>
        <InputIcon>
          <User className="size-5" />
        </InputIcon>
        <InputField placeholder="Placeholder" />
      </InputRoot>

      <IconButton>
        <Copy />
      </IconButton>
    </main>
  )
}
