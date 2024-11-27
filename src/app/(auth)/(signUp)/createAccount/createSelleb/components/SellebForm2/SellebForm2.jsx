'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoTrashOutline } from 'react-icons/io5'
import FormInput from '@/components/FormInput'
import './SellebForm2.css'
import NextButton from '../../../components/NextButton/NextButton'
import UploadBox from '../../../components/UploadBox/UploadBox'

const SellebForm2 = ({ goToNextTab }) => {
    const { register, handleSubmit } = useForm()
    const [images, setImages] = useState({
        id_photo: null,
        consent_photo: null,
        bank_photo: null,
    })

    const handleImageUpload = (e, type) => {
        const file = e.target.files[0]
        setImages(prev => ({
            ...prev,
            [type]: file,
        }))
    }

    const handleDelete = type => {
        setImages(prev => ({
            ...prev,
            [type]: null,
        }))
    }

    const onSubmit = data => {
        console.log('폼 데이터:', data)
        goToNextTab()
    }

    return (
        <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="info-left">
                <h5>신분증</h5>
                <p>주민등록증/여권/운전면허증/외국인등록증</p>
                <UploadBox
                    onChange={e => handleImageUpload(e, 'id_photo')}
                    onDelete={() => handleDelete('id_photo')}
                    id="id_photo"
                />
                <div>
                    <h5>미성년자 부모 동의서</h5>
                    <p>
                        미성년자 셀럽 활동을 위한 부모님 동의서 사본을 업로드
                        해주세요.
                        <br />
                    </p>
                    <span>
                        <label htmlFor="info-parents">해당사항없음</label>
                        <input
                            type="checkbox"
                            className="input-check"
                            id="info-parents"
                        />
                    </span>

                    <UploadBox
                        onChange={e => handleImageUpload(e, 'consent_photo')}
                        onDelete={() => handleDelete('consent_photo')}
                        id="consent_photo"
                    />
                </div>
            </section>
            <section className="info-right">
                <div className="visa-info-section">
                    <p>비자 정보</p>
                    <div className="visa-info">
                        <span>대한민국 영주권 혹은 시민권</span>
                        <div>
                            <span>Y</span>
                            <input
                                type="radio"
                                {...register('visaStatus')}
                                value="yes"
                            />
                            <span>N</span>
                            <input
                                type="radio"
                                {...register('visaStatus')}
                                value="no"
                            />
                        </div>
                    </div>
                    <div className="visa-input">
                        <FormInput
                            title="비자 종류"
                            id="visa"
                            register={register}
                        />
                        <FormInput
                            title="외국인 등록번호"
                            id="registration_number"
                            register={register}
                        />
                    </div>
                </div>
                <div className="account-info">
                    <p>계좌 정보</p>
                    <FormInput
                        title="출금 은행"
                        id="bank_number"
                        register={register}
                    />
                    <FormInput
                        title="예금주(통장사본과 일치)"
                        id="bank_depositor"
                        register={register}
                    />
                    <FormInput
                        title="수익금 출금계좌(통장사본과 일치)"
                        id="bank_depositor"
                        register={register}
                    />
                </div>

                <div className="bankbook-info">
                    <p>통장 사본</p>
                    <UploadBox
                        onChange={e => handleImageUpload(e, 'bank_photo')}
                        onDelete={() => handleDelete('bank_photo')}
                        id="bank_photo"
                    />
                    <div>
                        <FormInput
                            title="세금계산서수취이메일"
                            id="tax_email"
                            register={register}
                        />
                        <FormInput
                            title="담당자명"
                            id="manager_name"
                            register={register}
                        />
                    </div>
                </div>

                <NextButton type="submit" />
            </section>
        </form>
    )
}

export default SellebForm2
