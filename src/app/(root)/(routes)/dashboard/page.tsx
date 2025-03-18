import getMe from '@/modules/auth/actions/auth/get-user-me'

const Dashboard = async () => {
  const me = await getMe()
  console.log(me)

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
