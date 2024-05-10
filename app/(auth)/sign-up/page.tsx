import AuthForm from "@/components/auth-form";
import React from "react";

type Props = {};

const SignUp = async ({}: Props) => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
