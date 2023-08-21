"use client";
import Layout from "@/components/layout";
import { RadioGroup } from "@headlessui/react";
import {
  CheckCircleIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { use, useState } from "react";

const deliveryMethods = [
  { id: 1, title: "Estandar", turnaround: "4–10 días habiles", price: "$5.00" },
  { id: 2, title: "Express", turnaround: "2–5 días habiles", price: "$16.00" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pay() {
  const [name, setName] = useState<string>("");
  const [apellidos, setApellido] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [numCel, setNumCel] = useState<string>("");

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  return (
    <Layout>
      {
        <div className="bg-white">
          {/* Background color split screen for large screens */}
          <div className="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:px-8 lg:pt-16">
            <h1 className="sr-only">Checkout</h1>
            {/* Order Summary */}
            <section
              aria-labelledby="summary-heading"
              className="footer-bg text-white lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full border rounded-xl"
            >
              <div className="p-8">
                <div className="mx-auto py-12 px-4 md:px-10 lg:px-0 lg:pb-24 lg:pt-0">
                  <h2 className="font-bold text-center text-4xl">
                    Resumen y metodo de envío
                  </h2>
                  <div className="text-start my-5">
                    <p className="my-2 text-white text-start text-lg">Nombre</p>
                    <p className="my-2 text-white text-start text-lg">
                      Apellidos
                    </p>
                    <p className="my-2 text-white text-start text-lg">
                      Correo electrónico
                    </p>
                  </div>
                  <RadioGroup
                    value={selectedDeliveryMethod}
                    onChange={setSelectedDeliveryMethod}
                    className="mt-10"
                  >
                    <RadioGroup.Label className="text-xl text-center mx-auto font-medium text-white">
                      Método de envío
                    </RadioGroup.Label>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      {deliveryMethods.map((deliveryMethod) => (
                        <RadioGroup.Option
                          key={deliveryMethod.id}
                          value={deliveryMethod}
                          className={({ checked, active }) =>
                            classNames(
                              checked
                                ? "border-transparent"
                                : "border-gray-300",
                              active ? "ring-2 ring-indigo-500" : "",
                              "relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none"
                            )
                          }
                        >
                          {({ checked, active }) => (
                            <>
                              <span className="flex flex-1">
                                <span className="flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {deliveryMethod.title}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-1 flex items-center text-sm text-gray-500"
                                  >
                                    {deliveryMethod.turnaround}
                                  </RadioGroup.Description>
                                  <RadioGroup.Description
                                    as="span"
                                    className="mt-6 text-sm font-medium text-gray-900"
                                  >
                                    {deliveryMethod.price}
                                  </RadioGroup.Description>
                                </span>
                              </span>
                              {checked ? (
                                <CheckCircleIcon
                                  className="h-5 w-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-lg"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mx-auto py-12 px-4 md:px-10 lg:px-0 lg:pb-24 lg:pt-0">
                  <h2 className="font-bold text-center text-2xl text-white">
                    Documentos a traducir
                  </h2>
                  <div className="border-4 border-dashed rounded-xl p-5 flex flex-col bg-white my-5 justify-center items-center">
                    <PlusCircleIcon className="text-sky-600 w-24 h-24 text-center" />
                    <br />
                    <p className="text-center text-gray-700 text-bold text-xl">
                      Subir archivos
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <button className="border rounded-2xl w-full bg-white text-gray-900 hover:bg-sky-400 p-5 hover:text-white">
                    <span className="text-lg font-semibold">Ordenar ahora</span>
                  </button>
                </div>
              </div>
            </section>
            {/* Payment data */}
            <section
              aria-labelledby="payment-and-shipping-heading"
              className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
            >
              <div className="py-8">
                <h2 className="font-bold text-center text-4xl">Ordene ahora</h2>
                <form>
                  <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div>
                      <h3
                        id="contact-info-heading"
                        className="text-lg font-medium text-gray-900 text-center mt-2"
                      >
                        En unos clics, obtenga su orden con facilidad y rapidez.
                      </h3>

                      <div className="mt-6">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Correo electrónico
                        </label>
                        <div className="mt-1">
                          <input
                            type="email"
                            id="email-address"
                            name="email-address"
                            autoComplete="email"
                            value={email}
                            onChange={() => {}}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-lg font-medium text-gray-900">
                        Detalles de pago
                      </h3>

                      <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                        <div className="col-span-3 sm:col-span-4">
                          <label
                            htmlFor="card-number"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Número de tarjeta
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="card-number"
                              name="card-number"
                              autoComplete="cc-number"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="col-span-2 sm:col-span-3">
                          <label
                            htmlFor="expiration-date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Fecha de expiración (MM/YY)
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="expiration-date"
                              id="expiration-date"
                              autoComplete="cc-exp"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="cvc"
                            className="block text-sm font-medium text-gray-700"
                          >
                            CVC
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="cvc"
                              id="cvc"
                              autoComplete="csc"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-lg font-medium text-gray-900">
                        Dirección de compras
                      </h3>

                      <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Dirección
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="address"
                              name="address"
                              autoComplete="street-address"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ciudad
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="city"
                              name="city"
                              autoComplete="address-level2"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Estado
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="region"
                              name="region"
                              autoComplete="address-level1"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Código Postal
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              id="postal-code"
                              name="postal-code"
                              autoComplete="postal-code"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-lg font-medium text-gray-900">
                        Información de facturación
                      </h3>

                      <div className="mt-6 flex items-center">
                        <input
                          id="same-as-shipping"
                          name="same-as-shipping"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <div className="ml-2">
                          <label
                            htmlFor="same-as-shipping"
                            className="text-sm font-medium text-gray-900"
                          >
                            Misma informacion de envío
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                      <button
                        type="submit"
                        className="rounded-md border border-transparent footer-bg px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Pagar ahora
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      }
    </Layout>
  );
}
