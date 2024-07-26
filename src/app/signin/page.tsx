import { Container, LoginForm } from "@/components/shared";


export default function SignIn() {
  return (
    <section className="section">
      <Container>
        <h1 className="font-bold text-2xl text-center mb-4">Welcome!</h1>
        <LoginForm />
      </Container>
    </section>
  );
}
