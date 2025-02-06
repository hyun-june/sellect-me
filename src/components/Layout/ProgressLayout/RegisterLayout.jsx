import SignUpProgress from "@/components/SignUpProgress";

export default function RootLayout({ children }) {
  return (
    <div>
      <SignUpProgress currentStep={3} />
      <div className="margin-top-3">{children}</div>
    </div>
  );
}
