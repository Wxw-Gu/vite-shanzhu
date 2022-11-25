import useSWR from 'swr'
import _ from 'lodash'
import p from '../assets/images/p.svg'
import { ajax } from '../lib/ajax'
import { AddltemFloatButton } from '../components/AddltemFloatButton'
import { Loading } from '../components/Loading'
export const Home: React.FC = () => {
  const { data: meData, error: meError } = useSWR('/api/v1/me', async (path) => {
    return (await ajax.get<Resource<User>>(path)).data.resource
  })

  const { data: itemsData, error: itemsError } = useSWR(meData && '/api/v1/items', async (path) => {
    return (await ajax.get<Resources<Item>>(path)).data
  })

  const isLoadingMe = !meData && !meError
  const isLoadingItems = meData && !itemsData && !itemsError

  if (isLoadingMe || isLoadingItems) {
    return <Loading />
  }
  if (!_.isEmpty(itemsData?.resources)) {
    // return <Navigate to='/items' />
  }

  return (
    <div>
      <div flex justify-center items-center>
        <img src={p} mt-20vh mb-20vh width='128' height='130'/>
      </div>
      <div px-16px>
        <button h-48px w='100%' bg='#5C33BE' b-none text-white rd-8px>开始记账</button>
      </div>
      <AddltemFloatButton />
    </div>
  )
}
