import p from '../assets/images/p.svg'
import add from '../assets/icons/add.svg'
export const Home: React.FC = () => {
  return (
    <div>
      <div flex justify-center items-center>
        <img src={p} mt-20vh mb-20vh width='128' height='130'/>
      </div>
      <div px-16px>
        <button h-48px w='100%' bg='#5C33BE' b-none text-white rd-8px>开始记账</button>
      </div>
      <button bg='#5C33BE' rounded="50%" p-4px w-56px h-56px b-none text-6xl fixed right-8px bottom-16px text-white>
        <img src={add} max-w='100%' max-h="100%"/>
      </button>
    </div>
  )
}
