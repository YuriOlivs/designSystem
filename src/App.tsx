import './styles/global.css';
import { Envelope, LockSimpleOpen } from 'phosphor-react'
import { Logo } from './components/Logo'
import { Text } from './components/Text/Text';
import { TextInput } from './components/TextInput/TextInput';
import { Heading } from './components/Heading/Heading';
import { Checkbox } from './components/Checkbox/Checkbox';
import { Button } from './components/Button/Button';

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center '>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='md' color='gray-400' className='mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4' autoComplete='off'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size='md' color='gray-100' className='font-semibold'>Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text size='md' color='gray-100' className='font-semibold'>Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockSimpleOpen />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='Digite sua senha' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
           <Checkbox id='remember' />
           <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar na plataforma
        </Button>
      </form>
      <footer className='flex flex-col items-center gap-[18px] mt-8 underline '>
        <Text asChild size='sm' color='gray-400'>
          <a href="">Esqueci minha senha</a>
        </Text>
        <Text asChild size='sm' color='gray-400'>
        <a href="">Não possui uma conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}


