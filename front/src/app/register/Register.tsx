import Opinion from "@/components/forms/Opinion";
import RegisterForm from "@/components/forms/RegisterForm";
import PATHROUTES from "@/helpers/PathRoutes";
import Link from "next/link";
import React from "react";

const Register: React.FC = () => {
  return (
    <main className=" text-custom-white">
      <section className=" w-full flex">
        <div className="w-1/2 bg-black bg-opacity-85 flex flex-col py-4">
          <div className="w-3/4 mx-auto">
            <h3 className="text-center text-custom-red text-3xl font-semibold">
              Registrate
            </h3>
            <p className="text-center text-custom-grey pt-3 pb-1.5">
              Para nosotros es un placer que te unas a nuestra
              comunidad.¡Tenemos muchos beneficios y recomendaciones esperando!.
            </p>
            <p className="text-center italic font-light pb-3">
              ¡Gracias por elegirnos!
            </p>
            <RegisterForm />
            <p className="text-center">
              ¿Ya tienes una cuenta?
              <Link
                href={PATHROUTES.LOGIN}
                className="pl-1 text-custom-red font-semibold hover:underline"
              >
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
        <Opinion />
      </section>
    </main>
  );
};

export default Register;
