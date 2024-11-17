import SignUpProgress from '@/components/SignUpProgress'

export default function RootLayout({ children }) {
    return (
        <div>
            <SignUpProgress currentStep={2} />
            <div className="margin-top-50">{children}</div>
        </div>
    )
}
