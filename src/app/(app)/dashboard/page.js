// dashboard - /dashboard 페이지 => 로그인시 대쉬보드로 이동됨. 로그인 했을 때 페이지로 사용 예정
import Header from '@/app/(app)/Header'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard

