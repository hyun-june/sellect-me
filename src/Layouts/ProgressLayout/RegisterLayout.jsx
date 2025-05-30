import SignUpProgress from "@/components/SignUpProgress";

export default function RootLayout({ children }) {
  return (
    <div>
      <SignUpProgress currentStep={3} />
      <div>{children}</div>
    </div>
  );
}
