'use client'
import { Container } from 'react-bootstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useForm } from 'react-hook-form'
import FormInput from '@/components/FormInput'
import './../../createAccount/createSelleb/css/createSelleb.css'

const createSellebPage = () => {
    const { register, handleSubmit } = useForm()

    const handleInfo = formData => {
        // sessionStorage.setItem(formTitle, formData)
        console.log('formData', formData)
    }
    // const onSubmit = (formData, e) => {
    //     const formTitle = e.target.title
    //     console.log('11', formTitle)
    //     handleInfo(formData, formTitle)
    // }
    return (
        <Container>
            <Tabs defaultIndex={0}>
                <TabList className="tabs_list">
                    <Tab className="tab_item">개인 정보</Tab>
                    <Tab className="tab_item">민감 정보</Tab>
                    <Tab className="tab_item">에이전시</Tab>
                    <Tab className="tab_item">프로필</Tab>
                    <Tab className="tab_item">모델료</Tab>
                    <Tab className="tab_item">동의서</Tab>
                    <Tab className="tab_item">제출 완료</Tab>
                </TabList>

                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput title="이름" id="name" register={register} />
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput
                            title="이름2"
                            id="name2"
                            register={register}
                        />
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <form onSubmit={handleSubmit(handleInfo)}>
                        <FormInput
                            title="이름"
                            id="name3"
                            register={register}
                        />
                        <button type="submit">버튼</button>
                    </form>
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름4" {...register('name4')} />
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름5" {...register('name5')} />
                </TabPanel>
                <TabPanel>
                    <button type="submit">버튼</button>
                </TabPanel>
                <TabPanel>
                    <FormInput title="이름7" {...register('name7')} />
                </TabPanel>
            </Tabs>
        </Container>
    )
}

export default createSellebPage
